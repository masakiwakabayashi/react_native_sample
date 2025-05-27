import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handlePress = () => {
    setCount(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>カウンター画面</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="カウントアップ" onPress={handlePress} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  count: {
    fontSize: 48,
    marginBottom: 24,
    fontWeight: 'bold',
  },
});
