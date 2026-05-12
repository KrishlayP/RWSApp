import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, IconButton, Searchbar } from "react-native-paper";

import { styles } from "../styles/styles";

function HomeHeader({ onOpenDrawer, onOpenPage, onSearchChange, search, t }) {
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

      <Searchbar
        placeholder={t("searchPlaceholder")}
        value={search}
        onChangeText={onSearchChange}
        style={styles.search}
        inputStyle={styles.searchInput}
      />
    </>
  );
}

export default memo(HomeHeader);
