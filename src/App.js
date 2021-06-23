import "./App.css";
import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import MainPage from "./components/mainPage/MainPage";
import { navigationComponents } from "./enums/navigationComponents";
import CvCreateMainPage from "./components/cvCreate/CvCreateMainPage";
import LanguageContext from "./languages/LanguageContext";
import { languageSelector } from "./languages/languageSelector";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => {
  const [component, setComponent] = useState("");
  const [language, setLanguage] = useState("french");

  const switchComponent = () => {
    console.log(component);
    switch (component) {
      case navigationComponents.CV_CREATION:
        return (<CvCreateMainPage setComponent={setComponent} />);
      default:
        return (<MainPage setComponent={setComponent} />);
    }
  };

  return (
    <LanguageContext.Provider value={ {messages:languageSelector(language), language, setLanguage} }>
      <MuiThemeProvider theme={darkTheme}>
        <div className="App">
          {switchComponent(component)}
        </div>
      </MuiThemeProvider>
    </LanguageContext.Provider>
  );
};

export default App;
