import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native カウンター</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="カウントアップ" onPress={handleIncrement} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
