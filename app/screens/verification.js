import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export default function VerificationCodeScreen({ navigation }) {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.length !== 4) {
      alert('Please enter the 4-digit code.');
      return;
    }

    console.log('Verifying code:', code);
    // You would verify the code here with your backend

    // If successful, navigate to ResetPasswordScreen
    navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>Enter the 4-digit code sent to your email</Text>

      <TextInput
        placeholder="Enter code"
        keyboardType="numeric"
        value={code}
        onChangeText={(text) => setCode(text.replace(/[^0-9]/g, ''))}
        maxLength={4}
        style={styles.input}
      />

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6e6e6e', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 8,
  },
  verifyButton: {
    backgroundColor: '#0a5cd8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  verifyButtonText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
