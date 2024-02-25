import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from './components/Button';
import { Button2 } from './components/Button2';
import Icon from 'react-native-vector-icons/Feather'
import color from 'tailwindcss/colors'
import ToggleTheme from './components/ToggleTheme';


export default function App() {  
  return (
    <View className="flex-1 items-center justify-center dark:bg-black light:white p-8 ">
            <ToggleTheme />

            <Icon name="home" size={30} color={color.gray[400]} />
            <Text className='dark:text-gray-200 light:text-black text-xl font-bold'>Login</Text>

            <TextInput placeholder='Digite seu email' 
            className='border-2 dark:border-white light:border-black focus:border-orange-400 
            rounded-md h-12 dark:text-white light:text-black placeholder:text-gray-200
            my-4 mx-10 w-full' />

            <TextInput placeholder='Digite seu email' 
            className='border-2  dark:border-white light:border-black focus:border-orange-400 
            w-full rounded-md h-12 dark:text-white light:text-black placeholder:text-gray-200
            my-4' />

            <Button className='mb-2 text-white h-12 bg-green-500'/>
            <Button2 className='bg-yellow-500 h-12 rounded px-4 py-2 rounded-lg'/>
     
    
    </View>
  );
}