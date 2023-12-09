import { createContext } from "react"

const defaultvalue = {
    currentTheme : " ",
    changeCurrentTheme : (newTheme) => {},
}

const Theme = createContext(defaultvalue);

export default Theme;
