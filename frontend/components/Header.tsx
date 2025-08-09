import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  left: string;
  right: string;
}

const Header: React.FC<HeaderProps> = ({ left, right }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{left}</Text>
      <Text style={styles.right}>{right}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  right: {
    fontSize: 18,
  },
});

export default Header;

