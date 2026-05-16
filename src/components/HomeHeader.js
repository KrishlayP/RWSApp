import { memo, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar, IconButton, Searchbar } from "react-native-paper";

import { styles } from "../styles/styles";

function HomeHeader({
  categoryContent,
  i18nLanguage,
  mediaItems,
  onOpenDrawer,
  onOpenPage,
  onSearchSelect,
  t,
}) {
  const [search, setSearch] = useState("");
  const searchSuggestions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (query.length < 2) {
      return [];
    }

    return mediaItems
      .map((item) => {
        const translatedTitle = t(`media_${item.id}_title`);
        const title =
          translatedTitle === `media_${item.id}_title`
            ? item.title || item.id
            : translatedTitle;
        const category = categoryContent[item.categoryId];

        return {
          ...item,
          title,
          categoryTitle: category?.title,
        };
      })
      .filter((item) =>
        `${item.title} ${item.categoryTitle || ""} ${item.type}`
          .toLowerCase()
          .includes(query),
      )
      .slice(0, 6);
  }, [categoryContent, i18nLanguage, mediaItems, search, t]);

  const selectSuggestion = (item) => {
    setSearch("");
    onSearchSelect(item);
  };

  return (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onOpenDrawer}>
          <Avatar.Text
            size={44}
            label="F"
            style={styles.avatar}
            labelStyle={styles.avatarLabel}
          />
        </TouchableOpacity>

        <View style={styles.topActions}>
          <IconButton
            icon="help-circle-outline"
            iconColor="#111827"
            size={22}
            onPress={() => onOpenPage(t("helpCenter"))}
          />
          <IconButton
            icon="magnify"
            iconColor="#111827"
            size={24}
            onPress={() => onOpenPage(t("search"))}
          />
        </View>
      </View>

      <View style={styles.searchWrap}>
        <Searchbar
          placeholder={t("searchPlaceholder")}
          value={search}
          onChangeText={setSearch}
          style={styles.search}
          inputStyle={styles.searchInput}
        />
        {searchSuggestions.length ? (
          <View style={styles.searchDropdown}>
            {searchSuggestions.map((item) => (
              <TouchableOpacity
                key={`${item.categoryId}-${item.id}`}
                style={styles.searchSuggestion}
                onPress={() => selectSuggestion(item)}
              >
                <View style={styles.searchSuggestionIcon}>
                  <Text style={styles.searchSuggestionIconText}>
                    {item.type === "wallpaper"
                      ? "W"
                      : item.type === "song"
                        ? "B"
                        : "R"}
                  </Text>
                </View>
                <View style={styles.searchSuggestionTextWrap}>
                  <Text style={styles.searchSuggestionTitle}>{item.title}</Text>
                  <Text style={styles.searchSuggestionMeta}>
                    {item.categoryTitle || item.categoryId}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>
    </>
  );
}

export default memo(HomeHeader);
