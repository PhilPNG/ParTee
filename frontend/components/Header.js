import React from 'react';
import { View, Text } from 'react-native';

export default function Header({ rightText }) {
  return (
    <View className="flex-row justify-between items-center px-4 py-2 bg-white border-b border-gray-200">
      <Text className="text-xl font-bold">Partee</Text>
      <Text className="text-xl">{rightText}</Text>
    </View>
  );
}
