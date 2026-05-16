import { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles/styles";
import { getFadeUpStyle, getPressScaleStyle } from "../utils/animations";

function CategoryItemCard({
  activeAudioId,
  autoPlayPreviews = true,
  categoryId,
  index,
  isFavorite,
  item,
  onChangeActiveAudio,
  onToggleFavorite,
  onProtectedAction,
}) {
  const entrance = useRef(new Animated.Value(0)).current;
  const press = useRef(new Animated.Value(1)).current;
  const audioPulse = useRef(new Animated.Value(0)).current;
  const isPlaying = activeAudioId === item.id;

  useEffect(() => {
    entrance.setValue(0);
    Animated.timing(entrance, {
      toValue: 1,
      duration: 420,
      delay: Math.min(index, 8) * 70,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [entrance, index, item.id]);

  useEffect(() => {
    if (!isPlaying || !autoPlayPreviews) {
      audioPulse.stopAnimation();
      audioPulse.setValue(0);
      return;
    }

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(audioPulse, {
          toValue: 1,
          duration: 720,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(audioPulse, {
          toValue: 0,
          duration: 720,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ]),
    );

    loop.start();

    return () => loop.stop();
  }, [audioPulse, autoPlayPreviews, isPlaying]);

  const animatePress = (toValue) => {
    Animated.spring(press, {
      toValue,
      friction: 7,
      tension: 160,
      useNativeDriver: true,
    }).start();
  };

  if (item.type === "audio") {
    const itemWithCategory = { ...item, categoryId };
    const progressWidth = audioPulse.interpolate({
      inputRange: [0, 1],
      outputRange: ["22%", "72%"],
    });
    const waveScale = audioPulse.interpolate({
      inputRange: [0, 1],
      outputRange: [0.65, 1],
    });

    return (
      <Animated.View style={getFadeUpStyle(entrance, 18)}>
        <Animated.View style={getPressScaleStyle(press)}>
          <Card style={styles.audioCard} mode="elevated">
            <View style={styles.audioRow}>
              <TouchableOpacity
                activeOpacity={0.86}
                style={styles.audioPlayButton}
                onPress={() => onChangeActiveAudio(isPlaying ? "" : item.id)}
                onPressIn={() => animatePress(0)}
                onPressOut={() => animatePress(1)}
              >
                <IconButton
                  icon={isPlaying ? "pause" : "play"}
                  iconColor="#FFFFFF"
                  size={24}
                  style={styles.audioPlayIcon}
                />
              </TouchableOpacity>

              <View style={styles.audioMain}>
                <View style={styles.audioTitleRow}>
                  <View style={styles.audioTextWrap}>
                    <Text style={styles.audioTitle}>{item.title}</Text>
                    <Text style={styles.audioSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Text style={styles.audioDuration}>
                    {item.size || "0:00"}
                  </Text>
                </View>

                <View style={styles.audioProgressTrack}>
                  <Animated.View
                    style={[
                      styles.audioProgressFill,
                      { width: isPlaying ? progressWidth : "18%" },
                    ]}
                  />
                  <View style={styles.audioWaveWrap}>
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <Animated.View
                        key={bar}
                        style={[
                          styles.audioWaveBar,
                          {
                            transform: [
                              {
                                scaleY: isPlaying
                                  ? waveScale
                                  : bar % 2
                                    ? 0.55
                                    : 0.35,
                              },
                            ],
                          },
                        ]}
                      />
                    ))}
                  </View>
                </View>
              </View>

              <IconButton
                icon="download"
                iconColor="#C2410C"
                size={22}
                style={styles.audioDownloadButton}
                onPress={() =>
                  onProtectedAction(`${item.title} download`, {
                    ...itemWithCategory,
                  })
                }
              />
              <IconButton
                icon={isFavorite ? "heart" : "heart-outline"}
                iconColor={isFavorite ? "#C2410C" : "#667085"}
                size={22}
                style={styles.audioDownloadButton}
                onPress={() => onToggleFavorite(itemWithCategory)}
              />
            </View>
          </Card>
        </Animated.View>
      </Animated.View>
    );
  }

  const itemWithCategory = { ...item, categoryId };

  return (
    <Animated.View style={getFadeUpStyle(entrance, 22)}>
      <Animated.View style={getPressScaleStyle(press)}>
        <Card style={styles.categoryCard} mode="elevated">
          <View style={styles.categoryMediaWrap}>
            {item.image ? (
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.categoryImage}
                imageStyle={styles.categoryImageRadius}
              >
                <View style={styles.categoryImageShade} />
              </ImageBackground>
            ) : (
              <View style={styles.categoryImageFallback}>
                <Text style={styles.categoryImageFallbackText}>
                  {item.type === "audio" ? "Audio" : item.type || "Media"}
                </Text>
              </View>
            )}
          </View>
          <Card.Content style={styles.categoryContent}>
            <View style={styles.categoryItemTextWrap}>
              <Text style={styles.categoryItemTitle}>{item.title}</Text>
              <Text style={styles.categoryItemSubtitle}>{item.subtitle}</Text>
            </View>
            <Button
              mode="contained"
              onPressIn={() => animatePress(0)}
              onPressOut={() => animatePress(1)}
              onPress={() =>
                onProtectedAction(`${item.title} download`, {
                  ...itemWithCategory,
                })
              }
              style={styles.categoryActionButton}
              labelStyle={styles.categoryActionLabel}
              contentStyle={styles.categoryActionContent}
            >
              {item.type === "image" ? "Save" : "Download"}
            </Button>
            <IconButton
              icon={isFavorite ? "heart" : "heart-outline"}
              iconColor={isFavorite ? "#C2410C" : "#667085"}
              size={22}
              style={styles.categoryFavButton}
              onPress={() => onToggleFavorite(itemWithCategory)}
            />
          </Card.Content>
        </Card>
      </Animated.View>
    </Animated.View>
  );
}

export default function CategoryScreen({
  category,
  categoryId,
  autoPlayPreviews,
  favoriteIds,
  onBack,
  onProtectedAction,
  onToggleFavorite,
}) {
  const [activeAudioId, setActiveAudioId] = useState("");

  const renderItem = useCallback(
    ({ index, item }) => (
      <CategoryItemCard
        activeAudioId={activeAudioId}
        autoPlayPreviews={autoPlayPreviews}
        categoryId={categoryId}
        index={index}
        isFavorite={favoriteIds.includes(item.id)}
        item={item}
        onChangeActiveAudio={setActiveAudioId}
        onToggleFavorite={onToggleFavorite}
        onProtectedAction={onProtectedAction}
      />
    ),
    [activeAudioId, categoryId, favoriteIds, onProtectedAction, onToggleFavorite],
  );

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.categoryContainer}>
      <View style={styles.categoryHeader}>
        <IconButton icon="arrow-left" iconColor="#111827" onPress={onBack} />
        <View style={styles.categoryHeaderText}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <Text style={styles.categoryDescription}>{category.description}</Text>
        </View>
      </View>

      <FlatList
        data={category.items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.categoryList}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        removeClippedSubviews
        windowSize={7}
      />
    </SafeAreaView>
  );
}
