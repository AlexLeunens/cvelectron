import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { navigationComponents } from "../../enums/navigationComponents";
import LanguageContext from "../../languages/LanguageContext";

const MainPage = ({ setComponent }) => {
    const {messages} = useContext(LanguageContext);
    return (
        <>
            <Typography variant="h1" color="textPrimary">
                {messages.title}
            </Typography>

            <Button variant="contained" onClick={() => setComponent(navigationComponents.CV_CREATION)}>
                {messages.create_new_cv}
            </Button>
        </>
    );
};

MainPage.propTypes = {
    setComponent: PropTypes.func,
};

export default MainPage;
