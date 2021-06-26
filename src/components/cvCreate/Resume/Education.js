import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: "row",
        marginTop: 24,
    },
    reportTitle: {
        color: "#61dafb",
        letterSpacing: 4,
        fontSize: 25,
        textAlign: "center",
        textTransform: "uppercase",
    }
});

const Education = () => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.reportTitle}>{"Education here"}</Text>
            </View>
        </>
    );
};

export default Education;