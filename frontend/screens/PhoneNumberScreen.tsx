import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';

const countries = [
  { code: '+1', label: '🇺🇸 +1' },
  { code: '+44', label: '🇬🇧 +44' },
  { code: '+91', label: '🇮🇳 +91' },
  { code: '+61', label: '🇦🇺 +61' },
];

interface Props {
  navigation: any;
}

const PhoneNumberScreen: React.FC<Props> = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 6 || digitsOnly.length > 14) {
      Alert.alert('Invalid phone number', 'Please enter a valid phone number.');
      return;
    }
    navigation.navigate('ProfileSetup');
  };

  return (
    <View style={styles.container}>
      <Header left="Partee" right="Sign Up" />
      <View style={styles.content}>
        <Text style={styles.title}>Enter your Phone Number</Text>
        <View style={styles.phoneRow}>
          <Picker
            selectedValue={countryCode}
            style={styles.picker}
            onValueChange={(value) => setCountryCode(value)}
          >
            {countries.map((c) => (
              <Picker.Item key={c.code} label={c.label} value={c.code} />
            ))}
          </Picker>
          <TextInput
            style={styles.phoneInput}
            keyboardType="phone-pad"
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <Text style={styles.notice}>
          by continuing you may receive an sms for verification. Message data rates may apply.
        </Text>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginTop: 20, marginBottom: 12, textAlign: 'center' },
  phoneRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  picker: { width: 100 },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginLeft: 8,
  },
  notice: { fontSize: 12, color: '#555', marginVertical: 16, textAlign: 'center' },
});

export default PhoneNumberScreen;

