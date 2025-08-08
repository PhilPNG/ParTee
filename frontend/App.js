import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
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
    <View style={styles.container}>
      {step === 1 ? (
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerLeft}>ParTee</Text>
            <Text style={styles.headerRight}>Sign Up</Text>
          </View>
          <View style={styles.centerContent}>
            <Text style={styles.title}>Enter your Phone Number</Text>
            <View style={styles.phoneRow}>
              <TextInput
                style={styles.countryCode}
                value={countryCode}
                onChangeText={setCountryCode}
              />
              <TextInput
                style={styles.phoneInput}
                placeholder="1234567890"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <Text style={styles.notice}>
              By continuing you may receive an SMS for verification. Message
              data rates may apply.
            </Text>
            <TouchableOpacity style={styles.button} onPress={validatePhone}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerLeft}>ParTee</Text>
            <Text style={styles.headerRight}>Setup your Profile</Text>
          </View>
          <Text style={styles.description}>
            Create an account so you can manage your profile and recover your
            account if necessary.
          </Text>
          <View style={styles.profileRow}>
            <View style={styles.profileLeft}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={profile.firstName}
                onChangeText={(t) => handleChange('firstName', t)}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={profile.lastName}
                onChangeText={(t) => handleChange('lastName', t)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={profile.email}
                onChangeText={(t) => handleChange('email', t)}
              />
              <TextInput
                style={styles.input}
                placeholder="Avg Score on Par76"
                keyboardType="numeric"
                value={profile.avgScore}
                onChangeText={(t) => handleChange('avgScore', t)}
              />
            </View>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>Upload Image
(Portrait)</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Handicap Index"
            keyboardType="numeric"
            value={profile.handicap}
            onChangeText={(t) => handleChange('handicap', t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={profile.age}
            onChangeText={(t) => handleChange('age', t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Open to playing at a simulator"
            value={profile.simulator}
            onChangeText={(t) => handleChange('simulator', t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Golf Cart / PushCart / Walk"
            value={profile.mobility}
            onChangeText={(t) => handleChange('mobility', t)}
          />
          <TextInput
            style={styles.input}
            placeholder="Pace of Play (<=4, 4.5, >=5 hrs)"
            value={profile.pace}
            onChangeText={(t) => handleChange('pace', t)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  headerLeft: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerRight: {
    fontSize: 18
  },
  centerContent: {
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  phoneRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  countryCode: {
    width: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    padding: 10,
    textAlign: 'center'
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  notice: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    marginTop: 10,
    borderRadius: 4
  },
  buttonText: {
    color: '#fff'
  },
  description: {
    marginBottom: 20,
    fontSize: 14
  },
  profileRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  profileLeft: {
    flex: 1,
    marginRight: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10
  },
  imagePlaceholder: {
    width: 120,
    height: 160,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    textAlign: 'center'
  }
});
