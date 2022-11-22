import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";
import {CommonStyles} from "~/core/theme/commonStyles";
import {PrimaryButton} from "~/common/components/PrimaryButton";
import {ButtonType} from "~/types";
import {Colors} from "~/core/theme/colors";

export const Authorization: NavigationFunctionComponent = (props): JSX.Element => {
    return (
        <View style={CommonStyles.flex1}>
            <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover' style={CommonStyles.flex1}>
                <View style={styles.root}>
                    <Text style={CommonStyles.logo}>CoffeTime</Text>
                    <View>
                        <PrimaryButton
                            text='Войти'
                            type={ButtonType.solid}
                            style={CommonStyles.button}
                            onPress={async () => Navigation.push(props.componentId, {
                                component: {
                                    name: 'LoginScreen',
                                    options: {
                                        topBar: {
                                            visible: true,
                                            background: {
                                                color: Colors.blue,
                                                translucent: true
                                            }
                                        }
                                    }
                                }
                            })}
                        />
                        <PrimaryButton
                            text='Зарегистрироваться'
                            type={ButtonType.solid}
                            style={CommonStyles.greenButton}
                            onPress={async () => Navigation.push(props.componentId, {
                                component: {
                                    name: 'RegistrationScreen',
                                    options: {
                                        topBar: {
                                            visible: true,
                                            background: {
                                                color: Colors.green,
                                                translucent: true
                                            }
                                        }
                                    }
                                }
                            })}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>);
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
    },

});
