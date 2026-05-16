import { memo, useEffect, useRef } from "react";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FEATURE_TILES } from "../data/appData";
import { styles } from "../styles/styles";
import { getFadeUpStyle, getPressScaleStyle } from "../utils/animations";

function FeatureTile({ index, item, onOpenCategory, t }) {
  const entrance = useRef(new Animated.Value(0)).current;
  const press = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(entrance, {
      toValue: 1,
      duration: 420,
      delay: 120 + index * 45,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [entrance, index]);

  const animatePress = (toValue) => {
    Animated.spring(press, {
      toValue,
      friction: 7,
      tension: 160,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.tileWrapper, getFadeUpStyle(entrance, 18)]}>
      <Animated.View style={getPressScaleStyle(press)}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onOpenCategory(item.categoryId)}
          onPressIn={() => animatePress(0)}
          onPressOut={() => animatePress(1)}
        >
          <LinearGradient colors={item.colors} style={styles.tile}>
            <Text style={styles.tileTitle}>{t(`feature_${item.id}`)}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

function FeatureGrid({ onOpenCategory, t }) {
  return (
    <View style={styles.grid}>
      {FEATURE_TILES.map((item, index) => (
        <FeatureTile
          key={item.id}
          index={index}
          item={item}
          onOpenCategory={onOpenCategory}
          t={t}
        />
      ))}
    </View>
  );
}

export default memo(FeatureGrid);
