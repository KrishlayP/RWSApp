import { memo, useEffect, useRef } from "react";
import { Animated, Easing, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";

import { HERO_BANNER } from "../data/assets";
import { styles } from "../styles/styles";
import { getFadeUpStyle } from "../utils/animations";

function HeroBanner({ onOpenCategory, t }) {
  const entrance = useRef(new Animated.Value(0)).current;
  const breathe = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(entrance, {
      toValue: 1,
      duration: 520,
      delay: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(breathe, {
          toValue: 1,
          duration: 4200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(breathe, {
          toValue: 0,
          duration: 4200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );

    loop.start();

    return () => loop.stop();
  }, [breathe, entrance]);

  const imageScale = breathe.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.04],
  });

  return (
    <Animated.View style={getFadeUpStyle(entrance, 22)}>
      <TouchableOpacity activeOpacity={0.92} onPress={() => onOpenCategory("wallpapers")}>
        <Card style={styles.heroCard} mode="elevated">
          <Animated.View style={{ transform: [{ scale: imageScale }] }}>
            <Image source={{ uri: HERO_BANNER }} style={styles.heroImage} />
          </Animated.View>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.75)"]}
            style={styles.heroOverlay}
          >
            <Text style={styles.heroTitle}>{t("heroTitle")}</Text>
            <Text style={styles.heroSubtitle}>{t("heroSubtitle")}</Text>
          </LinearGradient>
        </Card>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default memo(HeroBanner);
