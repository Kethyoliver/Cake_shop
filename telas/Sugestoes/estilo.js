
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    botao: {
        backgroundColor: '#C7830D',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 10, 
    },

    picker: {
        marginBottom: 12,
        paddingVertical: 8,
        backgroundColor: '#f5f5eb',
        borderRadius: 6,
    },
    texto: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    botaoContato: {
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ADFF2F',
        alignSelf: 'center',
    },
    bttCamera: {
        backgroundColor: '#ffffe0',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    fotoContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    cameraWrapper: {
        width: 300,
        height: 250,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-end', 
    },
    camera: {
        flex: 1,
    },
    cameraButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    profileImage: {
        width: 300,
        height: 250,
        borderRadius: 8,
    },
    botaoEnviar: {
        alignItems: 'center',
        width: 150,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        fontSize: 15,
        fontWeight: 'bold',
        elevation: 2,
        backgroundColor: '#ADFF2F',
        marginRight: 'auto',
        marginLeft: 'auto',
    }
});


export default estilos;

