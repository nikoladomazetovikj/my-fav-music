import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // TODO: Define all initial states here
    const initialStates = {};

    return (
        <AppContext.Provider value={initialStates}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
