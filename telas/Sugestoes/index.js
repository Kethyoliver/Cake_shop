import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import estilos from './estilo'; 

export default function Sugestoes({ info }) {
    return (
        <ScrollView style={estilos.container}> 
            <Image source={info.logo} style={estilos.logo} resizeMode='contain' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder='Digite seu email'
                    style={estilos.input} 
                />
                <TextInput
                    placeholder='Telefone'
                    keyboardType='numeric'
                    style={estilos.input} 
                />
                <TextInput
                    placeholder='Digite sua sugestão'
                    style={estilos.input} 
                />

                <TouchableOpacity
                    style={estilos.botao}
                    onPress={() => Alert.alert("Botão foi clicado.")}>
                    <Text style={estilos.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
