import { NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, StyleSheet, View, Text, ImageBackground} from "react-native";
import React, {useCallback} from "react";
import {useForm, Controller} from "react-hook-form";
import {Colors} from "~/core/theme/colors";
import {PrimaryButton} from "~/common/components/PrimaryButton";
import {ButtonType} from "~/types";
import {CommonStyles} from "~/core/theme/commonStyles";
import {useLazyLoginQuery} from "~/api/auth";
import {getTabsRootLayout} from "~/navigation/roots";
import {navigation} from "~/services";

export const Login: NavigationFunctionComponent = (): JSX.Element => {

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

    const [login] = useLazyLoginQuery();

    const onSubmit = useCallback(async (data: {email: string; password: string}) => {
        const accessToken = await login(data).unwrap();
        if (accessToken) {
            navigation.setRoot(getTabsRootLayout("light"));
        }
    },[login]);


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
                            onPress={async () =>onSubmit(user)}
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
