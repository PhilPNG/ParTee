import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import Header from '../components/Header';

export default function ProfileSetupScreen() {
  const [transport, setTransport] = useState({ cart: false, pushcart: false, walk: false });
  const [pace, setPace] = useState(null);
  const [openToSimulator, setOpenToSimulator] = useState(false);

  const toggleTransport = (key) => {
    setTransport({ ...transport, [key]: !transport[key] });
  };

  const renderTransportOption = (label, key) => (
    <Pressable
      key={key}
      onPress={() => toggleTransport(key)}
      className={`px-3 py-2 rounded border mr-2 ${transport[key] ? 'bg-blue-500' : 'bg-white'}`}
    >
      <Text className={transport[key] ? 'text-white' : 'text-black'}>{label}</Text>
    </Pressable>
  );

  const renderPaceOption = (label, value) => (
    <Pressable
      key={value}
      onPress={() => setPace(value)}
      className="flex-row items-center mb-2"
    >
      <View className={`w-4 h-4 rounded-full mr-2 border ${pace === value ? 'bg-blue-500' : 'bg-white'}`} />
      <Text>{label}</Text>
    </Pressable>
  );

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <Header rightText="Setup your Profile" />
      <View className="p-4">
        <Text className="mb-4">
          Create an account so you can manage your profile and recover your account if necessary.
        </Text>
        <View className="flex-row mb-4">
          <View className="flex-1">
            <TextInput
              className="border border-gray-300 rounded p-2 mb-2 bg-white"
              placeholder="First Name"
            />
            <TextInput
              className="border border-gray-300 rounded p-2 mb-2 bg-white"
              placeholder="Last Name"
            />
            <TextInput
              className="border border-gray-300 rounded p-2 mb-2 bg-white"
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              className="border border-gray-300 rounded p-2 mb-2 bg-white"
              placeholder="Avg Score on Par 76"
              keyboardType="numeric"
            />
          </View>
          <View className="w-32 h-40 ml-4 bg-gray-300 justify-center items-center">
            <Text className="text-center">Upload Image{`\n`}(Portrait)</Text>
          </View>
        </View>
        <TextInput
          className="border border-gray-300 rounded p-2 mb-2 bg-white"
          placeholder="Handicap Index"
          keyboardType="numeric"
        />
        <TextInput
          className="border border-gray-300 rounded p-2 mb-2 bg-white"
          placeholder="Age"
          keyboardType="numeric"
        />
        <Pressable
          onPress={() => setOpenToSimulator(!openToSimulator)}
          className="flex-row items-center mb-4"
        >
          <View
            className={`w-4 h-4 mr-2 border rounded ${openToSimulator ? 'bg-blue-500' : 'bg-white'}`}
          />
          <Text>Open to playing at a simulator</Text>
        </Pressable>
        <Text className="mb-2">Golf Cart/PushCart/Walk</Text>
        <View className="flex-row mb-4">
          {renderTransportOption('Golf Cart', 'cart')}
          {renderTransportOption('Push Cart', 'pushcart')}
          {renderTransportOption('Walk', 'walk')}
        </View>
        <Text className="mb-2">Pace of Play</Text>
        {renderPaceOption('<= 4 hours', '<=4')}
        {renderPaceOption('4.5 hours', '4.5')}
        {renderPaceOption('>= 5 hours', '>=5')}
      </View>
    </ScrollView>
  );
}
