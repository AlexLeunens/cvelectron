import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Name from "./Name";
import Skills from "./Skills";


const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: "column",
    },
});


const Resume = () => {

    return (
        <Document>
            <Page size="A4" styles={styles.page}>
                <Name />
                <Education />
                <Experience />
                <Skills />
            </Page>
        </Document>
    );
};

export default Resume;
