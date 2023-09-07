const { StyleSheet } = require("react-native");
const { scale } = require("react-native-size-matters");

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    productsContainer: {
      backgroundColor: "gainsboro",
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    productTxt: {
      color: "black",
      padding: scale(20),
      fontSize: scale(18)
    },
    itemContainer: {
      backgroundColor: 'gainsboro',
      width: "40%",
      padding: scale(8),
      margin: scale(13),
      borderRadius: scale(5),
      borderWidth: scale(0.4),
      borderColor: "grey",
      alignItems: "center",
      justifyContent: "center",
    },
    itemText: {
      fontSize: scale(14),
      color: 'black',
      alignItems: "center",
    },
    acitvityIndicatorStyle: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });

  export default styles;