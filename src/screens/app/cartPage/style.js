import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "gainsboro",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        padding: scale(20),
        marginBottom: scale(10)
    },
    cartTxt: {
        color: "black",
        fontSize: scale(20)
    },
    cartIconContainer: {
        flexDirection: 'row'
    },
    cartIcon: {
        alignSelf: 'flex-end'
    },
    cartLengthTxt: {
        color: "yellow",
        fontSize: scale(20),
        left: scale(-17),
        top: scale(-10)
    },
    item: {
        alignItems: 'center',
        borderRadius: 10,
        width: "22%",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyTxt: {
        color: "black",
        fontSize: scale(20)
    },
    flatListContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        alignSelf: 'center'
    },
    flatlisttxt: {
        alignItems: "center",
        marginTop: "1%"
    },
    addToCartContainer: {
        width: '30%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    addOrRemoveView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    addOrRemoveOpacity: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },
    flatlisttxt1: {
        color: "black",
        textAlign: "center",
        fontSize: 12,
    },
    itemContainer: {
        width: '80%',
        marginBottom: "5%",
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
    },
    thumbnail: {
        width: scale(90),
        height: scale(90),
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        color: "black",
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: 'green',
    },
    description: {
        color: "black",
        fontSize: 14,
        marginTop: 8,
    },
})
export default styles;