import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import TitleTextComponent from './TitleTextComponent';
import AppStyles from '../constants/AppStyles';

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <TitleTextComponent style={AppStyles.headerOne}>My Shopping List</TitleTextComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.danger,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 30,
        padding: 15,
    },
    // logo: {
    //     color: Colors.white,
    //     fontSize: 30,
    //     padding: 9,
    //     fontFamily: 'BangersRegular',
    // },
});

export default Header;
