import { memo, useEffect, useRef } from "react";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import { Button, Card, IconButton } from "react-native-paper";

import { styles } from "../styles/styles";
import { getFadeUpStyle, getPressScaleStyle } from "../utils/animations";

function MediaItemCard({
  index = 0,
  isFavorite,
  item,
  onDownload,
  onOpenCategory,
  onToggleFavorite,
  t,
}) {
  const entrance = useRef(new Animated.Value(0)).current;
  const press = useRef(new Animated.Value(1)).current;
  const translatedTitle = t(`media_${item.id}_title`);
  const title =
    translatedTitle === `media_${item.id}_title`
      ? item.title || item.id
      : translatedTitle;

  useEffect(() => {
    entrance.setValue(0);
    Animated.timing(entrance, {
      toValue: 1,
      duration: 360,
      delay: Math.min(index, 8) * 55,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [entrance, index, item.id]);

  const animatePress = (toValue) => {
    Animated.spring(press, {
      toValue,
      friction: 7,
      tension: 160,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={getFadeUpStyle(entrance, 16)}>
      <Animated.View style={getPressScaleStyle(press)}>
        <TouchableOpacity
          activeOpacity={0.92}
          onPress={() => onOpenCategory(item.categoryId)}
          onPressIn={() => animatePress(0)}
          onPressOut={() => animatePress(1)}
        >
          <Card style={styles.mediaCard}>
            <Card.Content style={styles.mediaContent}>
              <View style={styles.mediaTextWrap}>
                <Text style={styles.mediaTitle}>{title}</Text>
                <Text style={styles.mediaMeta}>{item.size || ""}</Text>
              </View>
              <Button
                mode="contained-tonal"
                style={styles.mediaDownloadButton}
                labelStyle={styles.mediaDownloadLabel}
                contentStyle={styles.mediaDownloadContent}
                onPress={() =>
                  onDownload(`${title} ${t("download")}`, {
                    ...item,
                    title,
                  })
                }
              >
                {t("download")}
              </Button>
              <IconButton
                icon={isFavorite ? "heart" : "heart-outline"}
                iconColor={isFavorite ? "#C2410C" : "#C2410C"}
                size={22}
                onPress={() =>
                  onToggleFavorite({
                    ...item,
                    title,
                  })
                }
                style={styles.mediaFavButton}
              />
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

export default memo(MediaItemCard);
