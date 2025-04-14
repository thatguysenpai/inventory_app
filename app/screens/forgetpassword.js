import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    console.log('Sending code to:', email);
    // Add your logic here: email validation, API call, etc.
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Your Password?</Text>
      <Text style={styles.subtitle}>Recover your account in just a few steps</Text>

      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
        <Text style={styles.sendButtonText}>Send Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', justifyContent: 'middle' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6e6e6e', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  sendButton: {
    backgroundColor: '#0a5cd8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
