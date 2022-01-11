import react, { useState } from 'react';
import { StyleSheet, View, TextInput, Modal } from 'react-native';
import BodyText from './BodyText';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';
import AppStyles from '../constants/AppStyles';

const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
    const [product, setProduct] = useState('');

    const inputHandler = (val) => {
        const regex = /[^a-z]/gi;

        // Tout ce qui sera retiré par la regex, sera remplacé par un ""
        setProduct(val.replace(regex, ''));
    };

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    };

    return (
        <Modal visible={displayModal} animationType="slide">
            <View style={styles.inputContainer}>
                <BodyText style={AppStyles.textBody}>Veuillez indiquer un produit</BodyText>
                <InputComponent
                    style={styles.textInput}
                    inputValue={product}
                    textPlaceholder="Nouveau produit"
                    onChangeHandler={inputHandler}
                    maxLength={10}
                />

                <View style={styles.btnContainer}>
                    <ButtonComponent onPressHandler={handleClick} style={styles.btnBlue}>
                        Valider
                    </ButtonComponent>
                    <ButtonComponent onPressHandler={cancelNewProduct} style={styles.btnTomato}>
                        Annuler
                    </ButtonComponent>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    textInput: {
        padding: 5,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 15,
        borderRadius: 30,
        height: 50,
        fontSize: 19,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnBlue: {
        backgroundColor: 'seagreen',
        width: 150,
        borderRadius: 6,
    },
    btnTomato: {
        backgroundColor: 'tomato',
        width: 150,
        borderRadius: 6,
    },
});

export default AddProduct;
