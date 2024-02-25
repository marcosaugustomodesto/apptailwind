import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const ButtonStyled = ({...rest}) => {
  return (
      <TouchableOpacity className='px-4 py-2  rounded-lg bg-black' {...rest}>
        <Text className='text-center text-lg font-bold text-white'>Button</Text>
      </TouchableOpacity>
  )
}

const Button = styled(ButtonStyled)

export { Button }