import { useCallback } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { Button, Card, IconButton } from "react-native-paper";

import { styles } from "../styles/styles";

export default function CategoryScreen({
  category,
  onBack,
  onProtectedAction,
}) {
  const renderItem = useCallback(
    ({ item }) => (
      <Card style={styles.categoryCard}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.categoryImage} />
        ) : null}
        <Card.Content style={styles.categoryContent}>
          <View style={styles.categoryItemTextWrap}>
            <Text style={styles.categoryItemTitle}>{item.title}</Text>
            <Text style={styles.categoryItemSubtitle}>{item.subtitle}</Text>
          </View>
          <Button
            mode="contained-tonal"
            onPress={() => onProtectedAction(`${item.title} download`)}
          >
            {item.type === "image" ? "Save" : "Download"}
          </Button>
        </Card.Content>
      </Card>
    ),
    [onProtectedAction],
  );

  return (
    <SafeAreaView style={styles.categoryContainer}>
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
