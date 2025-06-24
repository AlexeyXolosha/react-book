import {View, StyleSheet} from "react-native";
import {COLORS} from "@/constants/colors";

const Navigation = () => {
    return (
        <View style={styles.navContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: COLORS.mainBlack,

        height: 100,

        paddingBlock: 26,
        paddingInline: 30,

        position: "relative",
        bottom: 20,

        borderRadius: 50
    }
})

export default Navigation;