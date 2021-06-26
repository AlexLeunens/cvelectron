import english from "./english.json";
import french from "./french.json";

export const languageSelector = (language) => {
    switch (language) {
        case "EN":
            return english;
        default:
            return french;
    }
};
