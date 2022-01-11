import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/colors';

const Products = ({ name, deleteProduct, idString }) => {
    return (
        <Pressable onPress={() => deleteProduct(idString)}>
            <View style={styles.items}>
                <FontAwesome name="remove" size={29} color={Colors.white} />
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    );
};

export default Products;

const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: Colors.danger,
        padding: 15,
    },
    element: {
        color: Colors.white,
        fontSize: 17,
        marginLeft: 20,
    },
});
