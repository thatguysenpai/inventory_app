import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/images/osam.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome back</Text>
        <Link href="/screens/login" style={styles.button}>
          Let's get started
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // optional overlay for contrast
    paddingHorizontal: 24,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
