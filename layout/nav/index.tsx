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
        height: 80,
        paddingBlock: 26,
        paddingInline: 36,
        position: "relative",
        bottom: 40,
        borderRadius: 50
    }
})

export default Navigation;