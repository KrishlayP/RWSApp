import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button, Card } from "react-native-paper";

import { styles } from "../styles/styles";

function MediaItemCard({ item, onDownload, onOpenCategory, t }) {
  const title = t(`media_${item.id}_title`);

  return (
    <TouchableOpacity onPress={() => onOpenCategory(item.categoryId)}>
      <Card style={styles.mediaCard}>
        <Card.Content style={styles.mediaContent}>
          <View style={styles.mediaTextWrap}>
            <Text style={styles.mediaTitle}>{title}</Text>
            <Text style={styles.mediaMeta}>{item.size}</Text>
          </View>
          <Button
            mode="contained-tonal"
            onPress={() => onDownload(`${title} ${t("download")}`)}
          >
            {t("download")}
          </Button>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default memo(MediaItemCard);
