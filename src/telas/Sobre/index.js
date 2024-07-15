import React from "react";
import { Image, ScrollView} from 'react-native';
import styles from './estilos';
import Texto from '../../componentes/Texto';
import Loja from '../../../assets/loja.png';


export default function Index({info}){
    return <ScrollView style={styles.container}>
        <Image source={info.logo} style={styles.logo} resizeMode='contain'/>
        <Texto style={styles.textoSobre}>{info.texto_sobre}</Texto>
        <Image source={info.loja} style={styles.logo} resizeMode='contain' />
    </ScrollView>
}
