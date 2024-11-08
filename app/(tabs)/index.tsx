import React, { useState } from 'react';

import { View, Button, Text, TextInput } from 'react-native';

export default function HomeScreen() {
const [greeting, setGreeting] = useState('¡Hola, Alumno!');

const [nombre, setNombre] = useState('');

const [language, setLanguage] = useState('es');


const getTranslatedText = (key: string) => {
const translations = {

es: {
greeting: `¡Hola, ${nombre || 'Alumno'}!`,
namePlaceholder: 'Escribe tu nombre',
updateGreeting: 'Actualizar Saludo',
textSize: 'Tamaño del Texto',
red: 'Rojo',
green: 'Verde',
blue: 'Azul',
language: 'Idioma',
spanish: 'Español',
english: 'Inglés',
},
en: {
greeting: `Hello, ${nombre || 'Student'}!`,
namePlaceholder: 'Enter your name',
updateGreeting: 'Update Greeting',
textSize: 'Text Size',
red: 'Red',
green: 'Green',
blue: 'Blue',
language: 'Language',
spanish: 'Spanish',
english: 'English',
},
};
return translations[language][key];

};
return (
<View style={styles.container}>

<Text style={styles.greetingText}>
{getTranslatedText('greeting')}
</Text>

<TextInput
style={styles.input}
placeholder={getTranslatedText('namePlaceholder')}

value={nombre}
onChangeText={(text) => setNombre(text)}
/>

<Button
title={getTranslatedText('updateGreeting')}
onPress={() => setGreeting(getTranslatedText('greeting'))}
/>

<Text>{getTranslatedText('language')}</Text>

<View style={styles.buttonContainer}>
<Button title={getTranslatedText('spanish')} onPress={() => setLanguage('es')} />

<Button title={getTranslatedText('english')} onPress={() => setLanguage('en')} />

</View>
</View>
);
}
const styles = {
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
greetingText: {
fontSize: 24,
marginBottom: 10,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 200,

paddingHorizontal: 10,
marginBottom: 20,
},
buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
width: '60%',
},
};