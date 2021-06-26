import { PDFViewer } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import LanguageContext from "../../languages/LanguageContext";
import CvCreateSidebar from "./CvCreateSidebar";
import Resume from "./Resume/Resume";

const CvCreateMainPage = ({ setComponent }) => {
    const { messages } = useContext(LanguageContext);
    return (
        <>
            <CvCreateSidebar setComponent={setComponent} />

            <PDFViewer width="1000" height="100%" className="app" >
                <Resume />
            </PDFViewer>
        </>
    );
};

CvCreateMainPage.propTypes = {
    setComponent: PropTypes.func,
};

export default CvCreateMainPage;