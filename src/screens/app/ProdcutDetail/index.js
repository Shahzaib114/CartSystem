import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useGetProductsQuery } from '../../../Services/productApi';
import { setCategoryName } from '../../../Store/reducer';
import styles from './style';
const numColums = 2;

const DetailScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  //calling query of products
  const { data, isLoading } = useGetProductsQuery();

  const saveCatagoryName = (id) => {
    dispatch(setCategoryName(id))
  }

  return (
    <View style={styles.container}>
      <View style={styles.productsContainer}>
        <Text style={styles.productTxt}>Products</Text>
      </View>
      {isLoading ?
        (
          <View style={styles.acitvityIndicatorStyle}>
            <ActivityIndicator size={25} color={"black"} />
          </View>

        )
        :
        (
          <FlatList
            alwaysBounceVertical={true}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer}
                onPress={() => {
                  saveCatagoryName(item)
                  navigation.navigate('Smart Phones')
                }}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
            numColumns={numColums}
          />

        )
      }


    </View>
  )
}



export default DetailScreen;