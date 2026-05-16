# Firebase Phone Auth Setup

This app now uses Firebase native Phone Authentication for mobile-number OTP.

Important: real SMS delivery is not truly free. Firebase pricing says Phone Auth is billed per SMS. For free development, use Firebase Authentication test phone numbers. Test numbers do not send real SMS and do not cost money.

## 1. Create Firebase project

1. Go to Firebase Console and create a project.
2. Enable Authentication.
3. Enable the Phone sign-in provider.
4. In the Phone provider settings, add test phone numbers, for example:

```text
+911234567890 -> 123456
```

Use your own test number/code pair in the Firebase console. When you enter that number in the app, Firebase accepts the test code without sending SMS.

## 2. Add Android Firebase config

1. In Firebase Console, add an Android app.
2. Use package name:

```text
com.rwsapp.mobile
```

3. Download `google-services.json`.
4. Put it here:

```text
android/app/google-services.json
```

## 3. Run the app

Firebase native auth will not work inside Expo Go. Use a development build:

```sh
npx expo run:android
```

or build with EAS development profile:

```sh
eas build --profile development --platform android
```

Then start Metro for the development build:

```sh
npx expo start --dev-client
```

## 4. Production SMS

When you stop using test numbers, Firebase will send real SMS for real numbers. Keep an eye on Firebase pricing and quotas before opening the app to many users.
