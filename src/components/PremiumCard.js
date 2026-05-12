import { memo } from "react";
import { Text } from "react-native";
import { Button, Card } from "react-native-paper";

import { styles } from "../styles/styles";

function PremiumCard({ onOpenPage, t }) {
  return (
    <Card style={styles.premiumCard}>
      <Card.Content>
        <Text style={styles.premiumTitle}>{t("premiumTitle")}</Text>
        <Text style={styles.premiumText}>{t("premiumText")}</Text>
        <Button
          mode="contained"
          buttonColor="#F59E0B"
          textColor="#111827"
          style={styles.premiumButton}
          onPress={() => onOpenPage(t("premiumUpgradePage"))}
        >
          {t("upgradeNow")}
        </Button>
      </Card.Content>
    </Card>
  );
}

export default memo(PremiumCard);
