import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        borderRadius: 20,
        padding: 5,
    },
    tituloCard: {
        height: 50,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        padding: 3,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 16,
        fontWeight: "bold",
        color: "red",
        padding: 2,
        paddingVertical: 5,
    },
    imgProd: {
        borderRadius: 9,
        height: 250,
        width: 180,
    },
    // Estilos do Modal
    imgModal: {
        borderRadius: 5,
        height: 250,
        width: 170,
    }, 
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#F7F6F1',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#F7F6F1',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
    },
});
