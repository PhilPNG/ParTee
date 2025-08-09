import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

const mobilityOptions = ['Golf Cart', 'PushCart', 'Walk'];
const paceOptions = ['<=4 hours', '4.5 hours', '>=5 hours'];

const ProfileSetupScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avgScore, setAvgScore] = useState('');
  const [handicap, setHandicap] = useState('');
  const [age, setAge] = useState('');
  const [simulator, setSimulator] = useState(false);
  const [mobility, setMobility] = useState<string[]>([]);
  const [pace, setPace] = useState(paceOptions[0]);

  const toggleMobility = (opt: string) => {
    setMobility((prev) =>
      prev.includes(opt) ? prev.filter((p) => p !== opt) : [...prev, opt]
    );
  };

  return (
    <View style={styles.container}>
      <Header left="Partee" right="Setup your Profile" />
      <View style={styles.content}>
        <Text style={styles.description}>
          Create an account so you can manage your profile and recover your account if necessary.
        </Text>
        <View style={styles.topSection}>
          <View style={styles.leftColumn}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Avg Score on Par76"
              keyboardType="numeric"
              value={avgScore}
              onChangeText={setAvgScore}
            />
          </View>
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadText}>Upload Image{`\n`}(Portrait)</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Handicap Index"
          keyboardType="numeric"
          value={handicap}
          onChangeText={setHandicap}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <View style={styles.row}>
          <Text style={styles.label}>Open to playing at a simulator</Text>
          <Switch value={simulator} onValueChange={setSimulator} />
        </View>
        <Text style={styles.label}>Golf Cart / PushCart / Walk</Text>
        <View style={styles.checkboxRow}>
          {mobilityOptions.map((opt) => (
            <TouchableOpacity
              key={opt}
              style={[
                styles.checkbox,
                mobility.includes(opt) && styles.checkboxSelected,
              ]}
              onPress={() => toggleMobility(opt)}
            >
              <Text>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Pace of Play</Text>
        <View style={styles.radioRow}>
          {paceOptions.map((opt) => (
            <TouchableOpacity
              key={opt}
              style={styles.radioOption}
              onPress={() => setPace(opt)}
            >
              <View
                style={[
                  styles.radioCircle,
                  pace === opt && styles.radioSelected,
                ]}
              />
              <Text style={styles.radioLabel}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 16 },
  description: { fontSize: 14, color: '#555', marginVertical: 12 },
  topSection: { flexDirection: 'row' },
  leftColumn: { flex: 1, marginRight: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  uploadBox: {
    width: 140,
    height: 160,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: { textAlign: 'center' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: { fontSize: 14, marginVertical: 8 },
  checkboxRow: { flexDirection: 'row', marginBottom: 8 },
  checkbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  checkboxSelected: { backgroundColor: '#ccf' },
  radioRow: { flexDirection: 'row', marginBottom: 8 },
  radioOption: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 4,
  },
  radioSelected: { backgroundColor: '#555' },
  radioLabel: { fontSize: 14 },
});

export default ProfileSetupScreen;

