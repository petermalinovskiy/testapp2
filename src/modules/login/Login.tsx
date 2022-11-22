import {NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, StyleSheet, View, Text, ImageBackground} from "react-native";
import React, {useCallback} from "react";
import {useForm, Controller} from "react-hook-form";
import {Colors} from "~/core/theme/colors";
import {PrimaryButton} from "~/common/components/PrimaryButton";
import {ButtonType} from "~/types";
import {CommonStyles} from "~/core/theme/commonStyles";
import {useLazyLoginQuery } from "~/api/auth";
import {setTabsRoot} from "../../navigation/roots";

export const Login: NavigationFunctionComponent = (props): JSX.Element => {

    const {control, watch, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const user = {
        email: watch("email"),
        password: watch("password"),
    };

    const [login, loginData] = useLazyLoginQuery();

    /*const onSubmit = useCallback(async (data: {email: string; password: string}) => {
        const sessionID = await login(data).unwrap();
        console.log(data);
        console.log(sessionID);
        console.log(loginData);
    },[login]);*/



    const authorization = async () => {
        console.log('user111',JSON.stringify(user));

        return fetch('http://ci2.dextechnology.com:8000/api/User/Authorization',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then((r) => console.log(r))
            .catch(  (error) => {
                console.log('error',error);
            });
    };

    const onr = () => {authorization()};




    return (
        <View style={CommonStyles.flex1}>
            <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover'
                             style={CommonStyles.flex1}>
                <View style={styles.root}>
                    <Text style={CommonStyles.logo}>CoffeTime</Text>
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={CommonStyles.textInput}
                                    placeholder="email"
                                    placeholderTextColor={Colors.white}
                                />
                            )}
                            name="email"
                        />
                        {errors.email && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={CommonStyles.textInput}
                                    placeholder="пароль"
                                    placeholderTextColor={Colors.white}
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text>This is required.</Text>}

                        <PrimaryButton
                            text='Войти'
                            onPress={onr}
                            type={ButtonType.solid}
                            style={CommonStyles.button}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
