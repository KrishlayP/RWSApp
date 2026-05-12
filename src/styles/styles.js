import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stepAnimatedWrap: {
    flex: 1,
  },

  container: {
    flex: 1,

    backgroundColor: "#F3F4F6",
  },

  scrollContent: {
    paddingHorizontal: 16,

    paddingBottom: 36,

    paddingTop: 24,
  },

  topBar: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginTop: 8,
  },

  avatar: {
    backgroundColor: "#C084FC",
  },

  avatarLabel: {
    color: "#FFFFFF",

    fontWeight: "700",
  },

  topActions: {
    flexDirection: "row",

    alignItems: "center",
  },

  search: {
    marginTop: 10,

    marginBottom: 16,

    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    elevation: 0,
  },

  searchInput: {
    minHeight: 40,
  },

  shortcutList: {
    paddingVertical: 8,

    gap: 12,
  },

  shortcutItem: {
    width: 84,

    alignItems: "center",
  },

  shortcutCircle: {
    width: 74,

    height: 74,

    borderRadius: 37,

    alignItems: "center",

    justifyContent: "center",

    marginBottom: 6,
  },

  shortcutEmoji: {
    fontSize: 30,
  },

  shortcutLabel: {
    fontSize: 12,

    color: "#1F2937",

    fontWeight: "700",

    textAlign: "center",
  },

  heroCard: {
    marginTop: 12,

    borderRadius: 24,

    overflow: "hidden",

    backgroundColor: "#0F172A",
  },

  heroImage: {
    width: "100%",

    height: 180,
  },

  heroOverlay: {
    position: "absolute",

    width: "100%",

    height: "100%",

    justifyContent: "flex-end",

    padding: 16,
  },

  heroTitle: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "700",
  },

  heroSubtitle: {
    color: "#E5E7EB",

    marginTop: 2,
  },

  chips: {
    flexDirection: "row",

    marginTop: 16,

    marginBottom: 12,

    gap: 8,
  },

  chipButton: {
    borderRadius: 20,
  },

  grid: {
    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",

    marginBottom: 8,
  },

  tile: {
    width: "100%",

    minHeight: 108,

    borderRadius: 18,

    marginBottom: 12,

    paddingHorizontal: 8,

    paddingVertical: 12,

    justifyContent: "center",

    alignItems: "center",
  },

  tileWrapper: {
    width: "31.5%",
  },

  tileTitle: {
    color: "#FFFFFF",

    fontWeight: "800",

    fontSize: 20,

    lineHeight: 24,

    textAlign: "center",
  },

  sectionTitle: {
    fontSize: 18,

    fontWeight: "700",

    color: "#111827",

    marginTop: 6,

    marginBottom: 10,
  },

  mediaCard: {
    marginBottom: 12,

    backgroundColor: "#FFFFFF",

    borderRadius: 16,
  },

  mediaContent: {
    flexDirection: "row",

    alignItems: "center",
  },

  mediaTextWrap: {
    flex: 1,

    paddingRight: 12,
  },

  mediaTitle: {
    color: "#111827",

    fontWeight: "700",

    fontSize: 15,
  },

  mediaMeta: {
    color: "#6B7280",

    marginTop: 2,
  },

  categoryContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  categoryHeader: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingBottom: 14,
    paddingRight: 16,
    paddingTop: 8,
  },

  categoryHeaderText: {
    flex: 1,
    paddingTop: 10,
  },

  categoryTitle: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "800",
  },

  categoryDescription: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },

  categoryList: {
    padding: 16,
    paddingBottom: 32,
  },

  categoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 14,
    overflow: "hidden",
  },

  categoryImage: {
    height: 160,
    width: "100%",
  },

  categoryContent: {
    alignItems: "center",
    flexDirection: "row",
  },

  categoryItemTextWrap: {
    flex: 1,
    paddingRight: 12,
  },

  categoryItemTitle: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "800",
  },

  categoryItemSubtitle: {
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3,
  },

  premiumCard: {
    borderRadius: 20,

    backgroundColor: "#0B1220",

    marginTop: 10,
  },

  premiumTitle: {
    color: "#FBBF24",

    fontSize: 18,

    fontWeight: "800",
  },

  premiumText: {
    color: "#E5E7EB",

    marginTop: 6,

    marginBottom: 12,
  },

  premiumButton: {
    borderRadius: 12,
  },

  drawerOverlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: "rgba(2, 6, 23, 0.3)",

    zIndex: 5,
  },

  drawer: {
    position: "absolute",

    top: 0,

    left: 0,

    bottom: 0,

    width: 280,

    backgroundColor: "#111827",

    paddingTop: 60,

    paddingHorizontal: 18,

    zIndex: 6,
  },

  drawerTitle: {
    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "700",

    marginBottom: 16,
  },

  drawerItem: {
    borderBottomColor: "#1F2937",

    borderBottomWidth: 1,

    paddingVertical: 14,
  },

  drawerItemText: {
    color: "#E5E7EB",

    fontSize: 16,

    fontWeight: "600",
  },

  devContainer: {
    flex: 1,

    backgroundColor: "#0B1220",

    paddingTop: 14,
  },

  devHeader: {
    alignItems: "flex-start",
  },

  devContent: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 20,
  },

  devTitle: {
    color: "#F9FAFB",

    fontSize: 24,

    fontWeight: "700",

    textAlign: "center",
  },

  devText: {
    color: "#FBBF24",

    marginTop: 10,

    fontSize: 18,

    fontWeight: "700",
  },

  splashContainer: {
    flex: 1,

    backgroundColor: "#000000",

    justifyContent: "space-between",

    paddingHorizontal: 26,

    paddingVertical: 42,
  },

  splashCenter: {
    marginTop: 140,

    alignItems: "center",
  },

  splashLogoWrap: {
    width: 84,

    height: 84,

    borderRadius: 14,

    backgroundColor: "#F97316",

    justifyContent: "center",

    alignItems: "center",
  },

  splashLogo: {
    color: "#FFFFFF",

    fontSize: 42,

    fontWeight: "700",
  },

  splashTitle: {
    color: "#FFFFFF",

    fontSize: 40,

    fontWeight: "700",

    marginTop: 18,
  },

  splashSubtitle: {
    color: "#E5E7EB",

    fontSize: 17,

    textAlign: "center",

    marginTop: 14,

    lineHeight: 25,
  },

  splashLoaderTrack: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderRadius: 999,

    height: 48,

    justifyContent: "center",

    alignItems: "center",
  },

  languageContainer: {
    flex: 1,

    backgroundColor: "#000000",

    paddingHorizontal: 20,

    paddingTop: 20,
  },

  languageClose: {
    width: 36,

    height: 36,

    justifyContent: "center",

    alignItems: "center",
  },

  languageCloseText: {
    color: "#FFFFFF",

    fontSize: 26,
  },

  langTopLogo: {
    alignSelf: "center",

    width: 74,

    height: 74,

    borderRadius: 12,

    marginTop: 20,

    marginBottom: 18,

    backgroundColor: "#F97316",

    alignItems: "center",

    justifyContent: "center",
  },

  languageTitle: {
    color: "#FFFFFF",

    fontSize: 44,

    textAlign: "center",

    fontWeight: "600",

    marginBottom: 20,
  },

  languageGrid: {
    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",
  },

  languageTile: {
    width: "48%",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingVertical: 16,

    alignItems: "center",
    marginBottom: 14,
  },
  languageTileSelected: {
    borderColor: "#F97316",
    backgroundColor: "#24130A",
  },
  languageMain: {
    color: "#FFFFFF",

    fontSize: 18,

    fontWeight: "600",
  },

  languageNative: {
    color: "#E5E7EB",

    fontSize: 16,

    marginTop: 4,
  },

  notifyOverlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: "rgba(17, 24, 39, 0.5)",

    justifyContent: "flex-end",

    padding: 18,
  },

  notifyCard: {
    backgroundColor: "#1F2937",

    borderRadius: 18,

    overflow: "hidden",
  },

  notifyTitle: {
    color: "#FFFFFF",

    fontSize: 19,

    fontWeight: "600",

    textAlign: "center",

    paddingVertical: 24,

    paddingHorizontal: 16,
  },

  notifyActions: {
    borderTopWidth: 1,

    borderTopColor: "#374151",
  },

  notifyActionText: {
    textAlign: "center",

    color: "#2563EB",

    fontSize: 20,

    paddingVertical: 16,

    borderTopWidth: 1,

    borderTopColor: "#374151",
  },

  otpOverlay: {
    flex: 1,
    backgroundColor: "rgba(17, 24, 39, 0.64)",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  otpCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
  },

  otpTitle: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "800",
  },

  otpSubtitle: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 14,
  },

  otpInput: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    color: "#111827",
    fontSize: 16,
    minHeight: 48,
    marginTop: 10,
    paddingHorizontal: 14,
  },

  otpDevHint: {
    color: "#7C3AED",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 8,
  },

  otpError: {
    color: "#DC2626",
    fontSize: 13,
    marginTop: 10,
  },

  otpActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 18,
  },

  otpPrimaryButton: {
    backgroundColor: "#7C3AED",
    borderRadius: 12,
    minWidth: 104,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  otpSecondaryButton: {
    borderColor: "#D1D5DB",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  otpButtonDisabled: {
    opacity: 0.45,
  },

  otpPrimaryText: {
    color: "#FFFFFF",
    fontWeight: "800",
    textAlign: "center",
  },

  otpSecondaryText: {
    color: "#374151",
    fontWeight: "800",
    textAlign: "center",
  },

  errorContainer: {
    flex: 1,

    backgroundColor: "#0B1220",

    justifyContent: "center",

    paddingHorizontal: 20,
  },

  errorCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 20,
  },

  errorTitle: {
    color: "#111827",

    fontSize: 22,

    fontWeight: "800",
  },

  errorText: {
    color: "#4B5563",

    fontSize: 15,

    lineHeight: 22,

    marginTop: 8,
  },

  errorButton: {
    alignSelf: "flex-start",

    backgroundColor: "#7C3AED",

    borderRadius: 12,

    marginTop: 18,

    paddingHorizontal: 18,

    paddingVertical: 12,
  },

  errorButtonText: {
    color: "#FFFFFF",

    fontWeight: "800",
  },
});
