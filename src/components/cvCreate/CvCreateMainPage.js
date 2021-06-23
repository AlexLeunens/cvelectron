import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { navigationComponents } from "../../enums/navigationComponents";
import LanguageContext from "../../languages/LanguageContext";
import { useContext } from "react";

const CvCreateMainPage = ({ setComponent }) => {
    const {messages} = useContext(LanguageContext);
    return (
        <>
            <Button variant="contained" onClick={() => setComponent(navigationComponents.HOME_PAGE)}>
                {messages.go_to_homepage}
            </Button>
        </>
    );
};

CvCreateMainPage.propTypes = {
    setComponent: PropTypes.func,
};

export default CvCreateMainPage;