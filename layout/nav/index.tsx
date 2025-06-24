import {View, StyleSheet} from "react-native";
import {COLORS} from "@/constants/colors";

const navigationBar = () => {
    return (
        <View style={styles.navContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: COLORS.mainBlack,
        height: 100
    }
})

export default NavigationBar;