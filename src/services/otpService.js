let phoneConfirmation = null;
let lastPhoneNumber = "";

const OTP_PROVIDER = process.env.EXPO_PUBLIC_OTP_PROVIDER || "mock";
const MOCK_OTP = process.env.EXPO_PUBLIC_MOCK_OTP || "123456";

export function normalizeIndianPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");

  if (digits.length < 10) {
    throw new Error("Enter a valid mobile number.");
  }

  return `+91${digits.slice(-10)}`;
}

async function getFirebaseAuth() {
  const authModule = require("@react-native-firebase/auth");
  return authModule.default || authModule;
}

export async function requestOtp(phone) {
  const phoneNumber = normalizeIndianPhone(phone);
  lastPhoneNumber = phoneNumber;

  if (OTP_PROVIDER !== "firebase") {
    return {
      delivery: "mock",
      phoneNumber,
    };
  }

  const auth = await getFirebaseAuth();
  phoneConfirmation = await auth().signInWithPhoneNumber(phoneNumber);

  return {
    delivery: "firebase-sms",
    phoneNumber,
  };
}

export async function verifyOtp(otp) {
  if (OTP_PROVIDER !== "firebase") {
    if (String(otp || "") !== MOCK_OTP) {
      throw new Error(`Use test OTP ${MOCK_OTP}.`);
    }

    return {
      user: {
        uid: `mock-${lastPhoneNumber}`,
        contactType: "phone",
        contactValue: lastPhoneNumber,
      },
    };
  }

  if (!phoneConfirmation) {
    throw new Error("Send OTP first.");
  }

  const credential = await phoneConfirmation.confirm(String(otp || ""));
  const user = credential.user;

  return {
    user: {
      uid: user.uid,
      contactType: "phone",
      contactValue: user.phoneNumber,
    },
  };
}
