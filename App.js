import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Modal,
    Text,
    Pressable,
    Image,
    ImageBackground,
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

import AddProduct from './components/AddProduct';
import ButtonComponent from './components/ButtonComponent';
import DismissKeyboard from './components/DismissKeyboard';
import Header from './components/Header';
import Products from './components/Products';
import Colors from './constants/colors';

// Recupération font en asynchrone
const fetchFonts = () => {
    return Font.loadAsync({
        'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
        'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
        'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    });
};

export default function App() {
    const [myProducts, setMyProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    // const [fontsLoaded, setFontsLoaded] = useState(false);

    const [fontsLoaded, error] = useFonts({
        BangersRegular: Bangers_400Regular,
        'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
        'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
        'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    // Tant qu'on a pas récupéré nos data, on affiche pas la page
    // if (!fontsLoaded) {
    //     return (
    //         <AppLoading
    //             startAsync={fetchFonts}
    //             onFinish={() => setFontsLoaded(true)}
    //             onError={(error) => console.log(error)}
    //         />
    //     );
    // }

    const submitHandler = (product) => {
        setDisplayModal(false);
        if (product.length > 1) {
            const idString = Date.now().toString();
            setMyProducts((currentMyProducts) => [
                { key: idString, name: product },
                ...currentMyProducts,
            ]);
        } else {
            setShowModal(true);
        }
        console.table(myProducts);
    };

    const deleteProduct = (key) => {
        setMyProducts((currentMyProducts) => {
            return currentMyProducts.filter((product) => product.key !== key);
        });
    };

    const cancelNewProduct = () => {
        setDisplayModal(false);
    };

    return (
        <DismissKeyboard>
            <ImageBackground
                source={{
                    uri: 'https://cdn.pixabay.com/photo/2015/10/25/00/51/christmas-1005228_960_720.jpg',
                }}
                style={styles.bgImage}>
                {/* Modal d'erreur ajout produit */}
                <Header />
                <View style={styles.container}>
                    <Modal
                        visible={showModal}
                        onRequestClose={() => setShowModal(false)}
                        animationType="slide"
                        transparent>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                {/* Header  */}
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalHeaderText}>OUPS</Text>
                                </View>
                                {/* Body */}
                                <View style={styles.modalBody}>
                                    <Image
                                        source={require('./assets/cross.png')}
                                        style={styles.redCheck}
                                    />
                                    <Text style={styles.modalBodyText}>
                                        merci d'indiquer au moins un caractère
                                    </Text>
                                </View>
                                {/* Footer */}
                                <View style={styles.modalFooter}>
                                    <Pressable
                                        style={styles.pressableBtnModal}
                                        onPress={() => setShowModal(false)}>
                                        <Text style={styles.modalBtn}>OK</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    {/* Ajout produit */}
                    <ButtonComponent
                        style={styles.addProductBtn}
                        onPressHandler={() => setDisplayModal(true)}>
                        Nouveau Produit
                    </ButtonComponent>
                    <AddProduct
                        cancelNewProduct={cancelNewProduct}
                        submitHandler={submitHandler}
                        displayModal={displayModal}
                    />
                    {/* Liste produits */}
                    <FlatList
                        data={myProducts}
                        renderItem={({ item }) => (
                            <Products
                                name={item.name}
                                idString={item.key}
                                deleteProduct={deleteProduct}
                            />
                        )}
                    />
                </View>
            </ImageBackground>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalContent: {
        backgroundColor: Colors.white,
        width: '90%',
        height: 300,
        borderRadius: 15,
        alignItems: 'center',
    },
    modalHeader: {
        width: '100%',
        padding: 16,
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.secondary,
    },
    modalHeaderText: {
        color: Colors.secondary,
        fontSize: 17,
    },
    modalBody: {
        flex: 1,
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBodyText: {
        fontSize: 17,
    },
    modalFooter: {
        width: '100%',
    },
    pressableBtnModal: {
        backgroundColor: Colors.info,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    modalBtn: {
        fontSize: 17,
        color: Colors.white,
        textAlign: 'center',
        padding: 16,
    },
    redCheck: {
        width: 100,
        height: 100,
    },
    addProductBtn: {
        backgroundColor: Colors.success,
        padding: 20,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: Colors.white,
        marginBottom: 20,
    },
    bgImage: {
        flex: 1,
    },
});
