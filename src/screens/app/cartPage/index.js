import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProdct } from '../../../Store/reducer';
import styles from './style';
const CartScreen = () => {
    const dispatch = useDispatch();
    let reduxData = useSelector(state => state.reducer);
    let values = Object.values(reduxData.items);
    const handleDeletion = (item) => {
        dispatch(removeProdct(item));
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.cartTxt}>Cart</Text>
                <View style={styles.cartIconContainer}>
                    <Entypo
                        name='shopping-cart'
                        color={'black'}
                        size={scale(24)}
                        style={styles.cartIcon}
                    ></Entypo>
                    <Text style={styles.cartLengthTxt}>{values.length}</Text>
                </View>
            </View>
            {values.length < 1 ?
                (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyTxt}>Not Any Item Added</Text>
                    </View>
                )
                :
                (
                    <FlatList
                        data={values}
                        keyExtractor={(item, index) => {
                            return index;
                        }}
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

                    />
                )}
        </View >
    )
}

export default CartScreen
