import { View, Text, Switch } from 'react-native'
import React from 'react'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'

const ToggleTheme = () => {
    const {colorScheme, toggleColorScheme} = useColorScheme();
    return (
    <View className='flex-row items-center'>
        <Text className='text-yellow-400'>Dark</Text>

        <Switch
        trackColor={{true:colors.blue[400], false:colors.gray[200]}}
        thumbColor={colorScheme === 'light'? colors.blue[900]: colors.yellow[900]}
        onValueChange={toggleColorScheme}
        value={colorScheme === 'light'}
        />
         
        <Text className='text-blue-500'>Light</Text>
    </View>
  )
}

export default ToggleTheme