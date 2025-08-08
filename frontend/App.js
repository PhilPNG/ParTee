import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function App() {
  const [step, setStep] = useState(1);
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    avgScore: '',
    handicap: '',
    age: '',
    simulator: '',
    mobility: '',
    pace: ''
  });

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Invalid phone number');
      return;
    }
    setStep(2);
  };

  const handleChange = (name, value) => {
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <View className="flex-1 bg-white">
      {step === 1 ? (
        <View className="flex-1 p-5">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-xl font-bold">ParTee</Text>
            <Text className="text-lg">Sign Up</Text>
          </View>
          <View className="items-center">
            <Text className="text-lg mb-2">Enter your Phone Number</Text>
            <View className="flex-row mb-2">
              <TextInput
                className="w-16 border border-gray-300 mr-2 p-2 text-center"
                value={countryCode}
                onChangeText={setCountryCode}
              />
              <TextInput
                className="flex-1 border border-gray-300 p-2"
                placeholder="1234567890"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <Text className="text-xs text-center my-2">
              By continuing you may receive an SMS for verification. Message
              data rates may apply.
            </Text>
            <TouchableOpacity className="bg-black px-4 py-3 mt-2 rounded" onPress={validatePhone}>
              <Text className="text-white">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View className="flex-1 p-5">
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-xl font-bold">ParTee</Text>
            <Text className="text-lg">Setup your Profile</Text>
          </View>
          <Text className="mb-5 text-base">
            Create an account so you can manage your profile and recover your
            account if necessary.
          </Text>
          <View className="flex-row mb-5">
            <View className="flex-1 mr-2">
              <TextInput
                className="border border-gray-300 p-2 mb-2"
                placeholder="First Name"
                value={profile.firstName}
                onChangeText={(t) => handleChange('firstName', t)}
              />
              <TextInput
                className="border border-gray-300 p-2 mb-2"
                placeholder="Last Name"
                value={profile.lastName}
                onChangeText={(t) => handleChange('lastName', t)}
              />
              <TextInput
                className="border border-gray-300 p-2 mb-2"
                placeholder="Email"
                keyboardType="email-address"
                value={profile.email}
                onChangeText={(t) => handleChange('email', t)}
              />
              <TextInput
                className="border border-gray-300 p-2 mb-2"
                placeholder="Avg Score on Par76"
                keyboardType="numeric"
                value={profile.avgScore}
                onChangeText={(t) => handleChange('avgScore', t)}
              />
            </View>
            <View className="w-32 h-40 border border-gray-300 justify-center items-center">
              <Text className="text-center">Upload Image{"\n"}(Portrait)</Text>
            </View>
          </View>
          <TextInput
            className="border border-gray-300 p-2 mb-2"
            placeholder="Handicap Index"
            keyboardType="numeric"
            value={profile.handicap}
            onChangeText={(t) => handleChange('handicap', t)}
          />
          <TextInput
            className="border border-gray-300 p-2 mb-2"
            placeholder="Age"
            keyboardType="numeric"
            value={profile.age}
            onChangeText={(t) => handleChange('age', t)}
          />
          <TextInput
            className="border border-gray-300 p-2 mb-2"
            placeholder="Open to playing at a simulator"
            value={profile.simulator}
            onChangeText={(t) => handleChange('simulator', t)}
          />
          <TextInput
            className="border border-gray-300 p-2 mb-2"
            placeholder="Golf Cart / PushCart / Walk"
            value={profile.mobility}
            onChangeText={(t) => handleChange('mobility', t)}
          />
          <TextInput
            className="border border-gray-300 p-2 mb-2"
            placeholder="Pace of Play (<=4, 4.5, >=5 hrs)"
            value={profile.pace}
            onChangeText={(t) => handleChange('pace', t)}
          />
        </View>
      )}
    </View>
  );
}
