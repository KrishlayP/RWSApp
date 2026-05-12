import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FEATURE_TILES } from "../data/appData";
import { styles } from "../styles/styles";

function FeatureGrid({ onOpenCategory, t }) {
  return (
    <View style={styles.grid}>
      {FEATURE_TILES.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.tileWrapper}
          onPress={() => onOpenCategory(item.categoryId)}
        >
          <LinearGradient colors={item.colors} style={styles.tile}>
            <Text style={styles.tileTitle}>{t(`feature_${item.id}`)}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default memo(FeatureGrid);
