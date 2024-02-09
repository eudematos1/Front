import { XCircle } from '@tamagui/lucide-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { H1, Button, Image, Input, Label } from 'tamagui';
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/tabs"); // Navegar a otra página
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <H1 style={styles.h1}>FILM</H1>
        <Button style={{marginTop:20}}icon={XCircle} size={80} chromeless onPress={handleButtonClick} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/movieIcons.jpg")} 
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.centeredInputContainer}>
          <Label htmlFor="title" style={styles.smallLabel}>Title</Label>
          <Input style={[styles.input, styles.inputTitle]} size="$4" borderWidth={2} />
        </View>
        <View style={styles.inlineInputContainer}>
          <View style={[styles.inputContainer, styles.inlineInput]}>
            <Label style={styles.title} htmlFor="time">Time</Label>
            <Input style={[styles.input, styles.inputTime]} size="$4" borderWidth={2} />
          </View>
          <View style={[styles.inputContainer, styles.inlineInput]}>
            <Label style={styles.title2}htmlFor="director">Director</Label>
            <Input style={[styles.input, styles.inputDirector]} size="$4" borderWidth={2} />
          </View>
        </View>
      </View>
      <Button style={{backgroundColor:"#000000", color:"white", borderColor:"white",marginTop:50}}>Create Character</Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h1: {
    flex: 1,
    fontSize: 40,
    marginTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
  },
  bannerImage: {
    width: 500,
    height: 300,
    resizeMode: 'center',
    marginTop:20
  },
  formContainer: {
    marginTop: 20,
  },
  centeredInputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  smallLabel: {
    fontSize: 16, // Tamaño más pequeño para el label "Title"
  },
  inputContainer: {
    marginBottom: 20,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    borderWidth: 2,
  },
  inputTitle: {
    width: '80%', // Ancho más pequeño para el input de Title
  },
  inputTime: {
    width: '75%',
    marginLeft:35 ,// Ancho más pequeño para el input de Time
  },
  inputDirector: {
    width: '75%',
    marginLeft:20 // Ancho más grande para el input de Director
  },
  inlineInput: {
    flex: 1,
    marginRight: 10,
  },
  title:{
    marginLeft:35
  },
  title2:{
    marginLeft:20
  }
});
