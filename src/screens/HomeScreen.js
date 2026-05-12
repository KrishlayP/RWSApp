import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing, FlatList, SafeAreaView, Text } from "react-native";
import { useTranslation } from "react-i18next";

import DrawerMenu from "../components/DrawerMenu";
import FeatureGrid from "../components/FeatureGrid";
import HeroBanner from "../components/HeroBanner";
import HomeHeader from "../components/HomeHeader";
import MediaItemCard from "../components/MediaItemCard";
import MediaTypeTabs from "../components/MediaTypeTabs";
import NotificationPrompt from "../components/NotificationPrompt";
import PhoneOtpModal from "../components/PhoneOtpModal";
import PremiumCard from "../components/PremiumCard";
import ShortcutList from "../components/ShortcutList";
import { CATEGORY_CONTENT, MEDIA_ITEMS } from "../data/appData";
import { styles } from "../styles/styles";
import { getStepAnimationStyle } from "../utils/animations";
import CategoryScreen from "./CategoryScreen";
import DevelopmentScreen from "./DevelopmentScreen";
import LanguageScreen from "./LanguageScreen";
import SplashScreen from "./SplashScreen";

export default function HomeScreen() {
  const [activeType, setActiveType] = useState("wallpaper");
  const [search, setSearch] = useState("");
  const [selectedPage, setSelectedPage] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [appStep, setAppStep] = useState("splash");
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(true);
  const [phoneUser, setPhoneUser] = useState(null);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const pendingProtectedActionRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.resolvedLanguage || i18n.language || "hi",
  );
  const drawerX = useRef(new Animated.Value(-280)).current;
  const stepAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setSelectedLanguage(i18n.resolvedLanguage || i18n.language || "hi");
  }, [i18n.language, i18n.resolvedLanguage]);

  const filteredItems = useMemo(
    () =>
      MEDIA_ITEMS.filter(
        (item) =>
          item.type === activeType &&
          t(`media_${item.id}_title`)
            .toLowerCase()
            .includes(search.toLowerCase()),
      ),
    [activeType, search, i18n.language, t],
  );

  const closeDrawer = useCallback(
    (immediate = false) => {
      if (immediate) {
        drawerX.setValue(-280);
        setIsDrawerOpen(false);
        return;
      }

      Animated.timing(drawerX, {
        toValue: -280,
        duration: 180,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start(() => setIsDrawerOpen(false));
    },
    [drawerX],
  );

  const openPage = useCallback(
    (pageTitle) => {
      closeDrawer(true);
      setSelectedPage(pageTitle);
    },
    [closeDrawer],
  );

  const openCategory = useCallback(
    (categoryId) => {
      closeDrawer(true);
      setSelectedCategoryId(categoryId);
    },
    [closeDrawer],
  );

  const requestProtectedAction = useCallback(
    (actionTitle) => {
      if (phoneUser) {
        setSelectedPage(actionTitle);
        return;
      }

      pendingProtectedActionRef.current = () => setSelectedPage(actionTitle);
      setIsOtpVisible(true);
    },
    [phoneUser],
  );

  const closeOtp = useCallback(() => {
    setIsOtpVisible(false);
    pendingProtectedActionRef.current = null;
  }, []);

  const completePhoneLogin = useCallback((phoneNumber) => {
    setPhoneUser({ phone: phoneNumber });
    setIsOtpVisible(false);

    if (pendingProtectedActionRef.current) {
      pendingProtectedActionRef.current();
      pendingProtectedActionRef.current = null;
    }
  }, []);

  const openDrawer = useCallback(() => {
    if (appStep !== "home") return;

    setIsDrawerOpen(true);

    Animated.timing(drawerX, {
      toValue: 0,
      duration: 220,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [appStep, drawerX]);

  const handleSelectLanguage = useCallback(
    (languageId) => {
      setSelectedLanguage(languageId);
      i18n.changeLanguage(languageId);
      setAppStep("home");
    },
    [i18n],
  );

  const hideNotificationPrompt = useCallback(() => {
    setShowNotificationPrompt(false);
  }, []);

  const renderMediaItem = useCallback(
    ({ item }) => (
      <MediaItemCard
        item={item}
        onDownload={requestProtectedAction}
        onOpenCategory={openCategory}
        t={t}
      />
    ),
    [openCategory, requestProtectedAction, t],
  );

  const renderHomeHeader = useCallback(
    () => (
      <>
        <HomeHeader
          onOpenDrawer={openDrawer}
          onOpenPage={openPage}
          onSearchChange={setSearch}
          search={search}
          t={t}
        />
        <ShortcutList onOpenCategory={openCategory} t={t} />
        <HeroBanner onOpenCategory={openCategory} t={t} />
        <MediaTypeTabs
          activeType={activeType}
          onChangeType={setActiveType}
          t={t}
        />
        <FeatureGrid onOpenCategory={openCategory} t={t} />
        <Text style={styles.sectionTitle}>
          {t("trending")} {t(`mediaType_${activeType}`)}
        </Text>
      </>
    ),
    [activeType, openCategory, openDrawer, openPage, search, t],
  );

  const renderHomeFooter = useCallback(
    () => <PremiumCard onOpenPage={openPage} t={t} />,
    [openPage, t],
  );

  useEffect(() => {
    const timer = setTimeout(() => setAppStep("language"), 1400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    stepAnim.setValue(0);

    Animated.timing(stepAnim, {
      toValue: 1,

      duration: 260,

      easing: Easing.out(Easing.ease),

      useNativeDriver: true,
    }).start();
  }, [appStep, stepAnim]);

  if (appStep === "splash") {
    return (
      <Animated.View
        style={[styles.stepAnimatedWrap, getStepAnimationStyle(stepAnim)]}
      >
        <SplashScreen />
      </Animated.View>
    );
  }

  if (appStep === "language") {
    return (
      <Animated.View
        style={[styles.stepAnimatedWrap, getStepAnimationStyle(stepAnim)]}
      >
        <LanguageScreen
          selectedLanguage={selectedLanguage}
          onSelectLanguage={handleSelectLanguage}
        />
      </Animated.View>
    );
  }

  if (selectedPage) {
    return (
      <DevelopmentScreen
        title={selectedPage}
        onBack={() => setSelectedPage("")}
      />
    );
  }

  if (selectedCategoryId) {
    return (
      <>
        <CategoryScreen
          category={
            CATEGORY_CONTENT[selectedCategoryId] || CATEGORY_CONTENT.wallpapers
          }
          onBack={() => setSelectedCategoryId("")}
          onProtectedAction={requestProtectedAction}
        />
        <PhoneOtpModal
          onClose={closeOtp}
          onVerified={completePhoneLogin}
          t={t}
          visible={isOtpVisible}
        />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DrawerMenu
        drawerX={drawerX}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        onOpenPage={openPage}
        t={t}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMediaItem}
        ListHeaderComponent={renderHomeHeader}
        ListFooterComponent={renderHomeFooter}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        removeClippedSubviews
        updateCellsBatchingPeriod={50}
        windowSize={7}
      />

      {showNotificationPrompt && (
        <NotificationPrompt onDismiss={hideNotificationPrompt} t={t} />
      )}

      <PhoneOtpModal
        onClose={closeOtp}
        onVerified={completePhoneLogin}
        t={t}
        visible={isOtpVisible}
      />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
