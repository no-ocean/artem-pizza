import {createContext} from "react";

export const ConfigContext = createContext();

export const ConfigProvider = ({children, value}) => {

    return(
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    );
}