import React from 'react';
import {FlatList, View, ImageBackground} from 'react-native';
import styles from "./estilo.js";
import Texto from '../../componentes/Texto.js';
import CardProd from "../../telas/Cardapio/componentes/card.js";
import Mock from '../../mocks/cardapio.js';

export default function Catalogo() {
    return (
        <View style={styles.tela}>
            <Texto style={styles.titulo}>{Mock.card.titulo}</Texto>
            <ImageBackground source={require('../../../assets/13.png')} style={styles.imageBackground}>

            <FlatList
                style={styles.lista}
                data={Mock.card.lista}
                renderItem={({ item }) => <CardProd item={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
            </ImageBackground>
        </View>
    );
}
