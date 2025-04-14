import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function LanguageSelectionScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleContinue = () => {
    console.log('Selected Language:', selectedLanguage);
    navigation.navigate('Home', { language: selectedLanguage });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Select Your Preferred Language</Text>
      <Text style={styles.subtitle}>Recover your account in just a few steps</Text>

      <View style={styles.radioGroup}>
        {['English', 'Hausa'].map((language) => (
          <TouchableOpacity
            key={language}
            style={styles.radioButton}
            onPress={() => setSelectedLanguage(language)}
          >
            <View style={styles.radioOuterCircle}>
              {selectedLanguage === language && <View style={styles.radioInnerCircle} />}
            </View>
            <Text style={styles.radioLabel}>{language}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6e6e6e', marginBottom: 24 },
  radioGroup: { marginBottom: 32 },
  radioButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  radioOuterCircle: {
    height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: '#1E50B5',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  radioInnerCircle: { height: 10, width: 10, borderRadius: 5, backgroundColor: '#1E50B5' },
  radioLabel: { fontSize: 16 },
  continueButton: {
    backgroundColor: '#0a5cd8', paddingVertical: 14, borderRadius: 8, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2,
    shadowRadius: 2, elevation: 3,
  },
  continueText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
