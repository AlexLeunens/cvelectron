import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { navigationComponents } from "../../enums/navigationComponents";
import LanguageContext from "../../languages/LanguageContext";
import HamburgerMenu from "../HamburgerMenu";


const CvCreateSidebar = ({ setComponent }) => {
    const { messages } = useContext(LanguageContext);

    return (
        <>
            <HamburgerMenu>
                <>
                    <Button variant="contained" onClick={() => setComponent(navigationComponents.HOME_PAGE)}>
                        {messages.go_to_homepage}
                    </Button>
                </>
            </HamburgerMenu>
        </>
    );
};

CvCreateSidebar.propTypes = {
    setComponent: PropTypes.func,
};

export default CvCreateSidebar;