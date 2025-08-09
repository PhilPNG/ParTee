import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';

export default function SignUpScreen({ navigation }) {
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');

  const validatePhone = () => {
    const cleaned = phone.replace(/[^\d]/g, '');
    if (cleaned.length !== 10) {
      Alert.alert('Invalid phone number', 'Please enter a 10 digit phone number.');
      return false;
    }
    return true;
  };

  const onContinue = () => {
    if (validatePhone()) {
      navigation.navigate('ProfileSetup');
    }
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Header rightText="Sign Up" />
      <View className="flex-1 p-4">
        <Text className="text-lg mb-2">Enter your Phone Number</Text>
        <View className="flex-row items-center mb-4">
          <Picker
            selectedValue={countryCode}
            style={{ width: 100 }}
            onValueChange={(value) => setCountryCode(value)}
          >
            <Picker.Item label="+1" value="+1" />
            <Picker.Item label="+44" value="+44" />
            <Picker.Item label="+91" value="+91" />
          </Picker>
          <TextInput
            className="flex-1 border border-gray-300 rounded p-2 ml-2 bg-white"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone number"
          />
        </View>
        <Text className="text-xs text-gray-600">
          By continuing you may receive an sms for verification. Message data rates may apply.
        </Text>
        <View className="mt-4">
          <Button title="Continue" onPress={onContinue} />
        </View>
      </View>
    </View>
  );
}
