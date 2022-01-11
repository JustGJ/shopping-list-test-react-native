import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';
const InputComponent = (props) => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.input, ...props.style }}
            value={props.inputValue}
            placeholder={props.textPlaceholder}
            onChangeText={props.onChangeHandler}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.secondary,
        borderWidth: 1,
        height: 40,
        marginVertical: 5,
    },
});

export default InputComponent;
