import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import LanguageContext from "../languages/LanguageContext";
import "../styles/HamburgerMenu.css";

const HamburgerMenu = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { messages } = useContext(LanguageContext);
    const anchor = "left";

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsMenuOpen(open);
    };

    return (
        <>
            <Button className="hamburger-button" onClick={toggleDrawer(true)}>{anchor}</Button>

            <Drawer anchor={anchor} open={isMenuOpen} onClose={toggleDrawer(true)}>
                <div>
                    <List>
                        {children}
                    </List>
                    <Divider />
                    <List>
                        <Button onClick={toggleDrawer(false)}>{messages.close_menu}</Button>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

HamburgerMenu.propTypes = {
    children: PropTypes.node,
};

export default HamburgerMenu;