import { memo } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-paper";

import { HERO_BANNER } from "../data/assets";
import { styles } from "../styles/styles";

function HeroBanner({ onOpenCategory, t }) {
  return (
    <TouchableOpacity onPress={() => onOpenCategory("wallpapers")}>
      <Card style={styles.heroCard} mode="elevated">
        <Image source={{ uri: HERO_BANNER }} style={styles.heroImage} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.75)"]}
          style={styles.heroOverlay}
        >
          <Text style={styles.heroTitle}>{t("heroTitle")}</Text>
          <Text style={styles.heroSubtitle}>{t("heroSubtitle")}</Text>
        </LinearGradient>
      </Card>
    </TouchableOpacity>
  );
}

export default memo(HeroBanner);
