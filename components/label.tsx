import type { SizeTokens } from 'tamagui'

import React from 'react';
import { Input, TextArea, XStack, YStack } from 'tamagui';

export function InputsDemo() {
  return (
    <YStack
      width={10}
      height={10}
      overflow="hidden"
      space="$2"
      margin="$3"
      padding="$2"
    >
      <InputDemo size="$2" />
      <InputDemo size="$3" />
      <InputDemo size="$4" />
      <TextArea placeholder="Enter your details..." />
    </YStack>
  );
}

export function InputDemo(props: { size: SizeTokens }) {
  const inputStyle = {
    fontSize: 10, // Tamaño de la fuente del input
    height: 30, // Altura del input
    // Otros estilos que desees aplicar...
  };

  return (
    <XStack alignItems="center" space="$2">
      <Input flex={1} size={props.size} style={inputStyle} placeholder={`Size ${props.size}...`} />
    </XStack>
  );
}
