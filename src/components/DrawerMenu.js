import { memo } from "react";
import { Animated, Pressable, Text, TouchableOpacity } from "react-native";

import { DRAWER_ITEMS } from "../data/appData";
import { styles } from "../styles/styles";

function DrawerMenu({ drawerX, isOpen, onClose, onOpenPage, t }) {
  return (
    <>
      {isOpen && (
        <Pressable style={styles.drawerOverlay} onPress={() => onClose()} />
      )}
      <Animated.View
        style={[styles.drawer, { transform: [{ translateX: drawerX }] }]}
      >
        <Text style={styles.drawerTitle}>{t("drawerTitle")}</Text>
        {DRAWER_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.drawerItem}
            onPress={() => onOpenPage(item.page)}
          >
            <Text style={styles.drawerItemText}>{t(`drawer_${item.id}`)}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </>
  );
}

export default memo(DrawerMenu);
