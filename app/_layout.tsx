import {Stack} from "expo-router";
import {SafeAreaView, StyleSheet, StatusBar} from "react-native";
import {COLORS} from "@/constants/colors";
import Navigation from "@/layout/nav"


export default function RootLayout() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"  />
            <Stack screenOptions={{headerShown: false}} />
            <Navigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingInline: 16,
        backgroundColor: COLORS.backgroundMain
    }
})