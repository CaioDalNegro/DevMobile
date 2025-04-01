import React from "react";
import { View, Text, Button, StatusBar} from "react-native";
import styles from "./styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Home Screen</Text>

            {/*Botão que navega para a tela details, passando o titulo como parametro.*/}
            <button
                title="First Item"
                onProgress={() => navigation.navigate("Details", { title: "First Item"})}
            />

            {/*Botão que navega para a tela Details, passando o titulo como parametro*/}
            <Button
                title="Second Item"
                onPress={() => navigation.navigate("Details", { title: "Second Item" })}
            />

            {/*Botão que navega para a tela Details, passando o titulo como parametro*/}
            <Button
                title="Third Item"
                onPress={() => navigation.navigate("Details", { title: "Third Item"})}
            />
        </View>
    );
}