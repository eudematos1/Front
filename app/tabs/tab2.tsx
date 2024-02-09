import { H1, ScrollView, Text } from "tamagui";
import { XStack } from 'tamagui';
import { CardDemo } from "../../components/cardscene";
import { Button } from 'tamagui';
import { PlusCircle } from '@tamagui/lucide-icons';
import { StyleSheet } from 'react-native';
import { router } from "expo-router";
export default function Tab2() {
  const handleButtonClick = () => {
    router.push("/editScene"); // Navegar a otra página
  };
  return (
    <>
    <H1 textAlign="left" padding="$0.5" >SCENES</H1>
   <ScrollView
   
   
   >
    <XStack>
    <CardDemo/>

    </XStack>
   
   </ScrollView>
   <Button
      onPress={handleButtonClick}
        icon={PlusCircle}
        style={styles.addButton}
        
      />

    </>
    
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100, // Ajusta el ancho del botón
    height: 100, // Ajusta la altura del botón
    borderRadius: 100, // Asegura que el botón sea circular
    alignItems: 'center', // Centra el icono verticalmente
    justifyContent: 'center', // Centra el icono horizontalmente
   
  },
});