import React from "react";
import { Pressable, Text, View } from "react-native";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import "@walletconnect/react-native-compat";

export default function WalletConnectScreen() {
  const { open, isConnected, provider, address } = useWalletConnectModal();

  const handlePress = () => {
    if (isConnected) {
      // Bağlantıyı kes
      provider?.disconnect();
    } else {
      // Modal'ı aç
      open();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onPress={handlePress}
        style={{
          padding: 10,
          backgroundColor: isConnected ? "red" : "green",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>
          {isConnected ? "Bağlantıyı Kes" : "Cüzdan Bağla"}
        </Text>
      </Pressable>
      {isConnected && (
        <Text style={{ marginTop: 20 }}>Bağlı Cüzdan: {address}</Text>
      )}
    </View>
  );
}
