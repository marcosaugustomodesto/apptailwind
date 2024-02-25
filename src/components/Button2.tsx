import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyledComponent } from 'nativewind'

export const Button2 = ({...rest}) => {
  return (
    <StyledComponent component={TouchableOpacity}{...rest}>
      <TouchableOpacity >
        <Text className='text-center text-lg font-bold text-white'>Button</Text>
      </TouchableOpacity>
    </StyledComponent>
  )
}

