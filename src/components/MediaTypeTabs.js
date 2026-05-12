import { memo } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { MEDIA_TYPES } from "../data/appData";
import { styles } from "../styles/styles";

function MediaTypeTabs({ activeType, onChangeType, t }) {
  return (
    <View style={styles.chips}>
      {MEDIA_TYPES.map((type) => {
        const isActive = type.id === activeType;

        return (
          <Button
            key={type.id}
            mode={isActive ? "contained" : "outlined"}
            buttonColor={isActive ? "#7C3AED" : "#FFFFFF"}
            textColor={isActive ? "#FFFFFF" : "#6B7280"}
            style={styles.chipButton}
            onPress={() => onChangeType(type.id)}
          >
            {t(`mediaType_${type.id}`)}
          </Button>
        );
      })}
    </View>
  );
}

export default memo(MediaTypeTabs);
