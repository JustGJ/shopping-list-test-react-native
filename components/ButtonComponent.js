import React from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ children, onPressHandler, style }) => {
    return (
        <TouchableOpacity onPress={onPressHandler} activeOpacity={0.6}>
            <View style={{ ...styles.btn, ...style }}>
                <Text style={styles.btnText}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'grey',
        padding: 9,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
    },
});

export default ButtonComponent;
