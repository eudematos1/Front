import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
  Image
} from "tamagui";
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <ImageBackground
        source={require('../assets/padrino.jpg')}
        style={styles.background}
      >
        
        <MyStack>
        <YStack >
        <Image
          source={{ 
              uri: require("../assets/banner.png")}} 
              style={styles.bannerImage}       
          />
        </YStack>
            <YStack></YStack>
            <YStack></YStack>
            <YStack></YStack>
            <YStack></YStack>
            <YStack></YStack>
            <YStack></YStack>
            <YStack></YStack>
            


          <YStack space="$2.5">
            <Button style={{backgroundColor:"#000000", color:"white", borderColor:"white"}}onPress={() => router.push("/tabs")}>Begin</Button>
            <Button style={{backgroundColor:"#000000",color:"white", borderColor:"white"}} onPress={() => router.push("/users/testuser")}>
              Go to user page
            </Button>
            
          </YStack>

          <YStack space="$5">

          </YStack>
        </MyStack>
      </ImageBackground>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center', // Centra el contenido dentro de ImageBackground
  },
  texth1:{
    color:"white"
  },
  bannerImage: {
    width: 350,  // Ajusta el ancho de la imagen según tus necesidades
    height: 60,  // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'center', // Puedes ajustar el modo de redimensionamiento según tus necesidades
    alignSelf:'center'
  },
  text:{
    color:"#9C9321"
  },
});
