import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsByCatagoryQuery } from '../../../Services/productApi';
import { addProduct, removeProdct } from '../../../Store/reducer';
import styles from './style';
const Smartphones = ({ navigation }) => {
  const dispatch = useDispatch();
  let reduxData = useSelector(state => state.reducer);
  let values = Object.values(reduxData.items);
  let myArray = [];
  let productFound = false;

  const categoryName = useSelector((state) => state.reducer.categoryName);

  const { data, isLoading } = useGetProductsByCatagoryQuery();
  if (data?.products) {
    const array = Object.values(data?.products)
    array.forEach((item) => {
      if (item.category == categoryName) {
        productFound = false;
        myArray.push(item)
      } else {
        productFound = true;
      }
    })
  }

  const handleDeletion = (item) => {
    dispatch(removeProdct(item));
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.cartTxt}>{categoryName}</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('CartScreen')
        }} style={styles.cartIconContainer}>
          <Entypo
            name='shopping-cart'
            color={'black'}
            size={scale(24)}
            style={styles.cartIcon} >
          </Entypo>
          <Text style={styles.cartLengthTxt}>{values.length}</Text>
        </TouchableOpacity>
      </View>
      {isLoading ?
        (
          <View style={styles.emptyContainer}>
            <ActivityIndicator size={25} color={"black"} />
          </View>
        )
        :
        (
          <>
            {myArray.length < 1 ?
              (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyTxt}>{categoryName} Not Available</Text>
                </View>
              )
              :
              (
                <FlatList
                  data={myArray}
                  renderItem={
                    ({ item }) => {
                      return (
                        <View style={styles.flatListContainer}>
                          <View style={styles.itemContainer} >
                            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>Price: ${item.price}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                          </View>
                          <View style={styles.addToCartContainer}>
                            <Text style={styles.price}>Add to cart</Text>
                            <View style={styles.addOrRemoveView}>
                              <TouchableOpacity
                                onPress={() => {
                                  handleDeletion(item)
                                }}
                                style={styles.addOrRemoveOpacity}>
                                <AntDesign name='minuscircle' color={'black'} size={scale(24)} />
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  dispatch(addProduct(item));
                                }}
                                style={styles.addOrRemoveOpacity}>
                                <Ionicons name='add-circle-sharp' color={'black'} size={scale(30)} />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    }}
                  keyExtractor={(item, index) => {
                    return item.id;
                  }}
                />
              )}
          </>
        )
      }
    </View >
  )
}

export default Smartphones
