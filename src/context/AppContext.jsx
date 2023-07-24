import {createContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = createContext({
    searchResults: []
});

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {

    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `${import.meta.env.VITE_API_BASE_URL}/search`,
                params: {
                    term: 'maks korzh',
                    locale: 'en-US',
                    offset: '0',
                    limit: '5',
                },
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
                    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_HOST,
                },
            };

            try {
                const response = await axios.request(options);
                setSearchResults(response.data);
            } catch (error) {
                console.error(error);
            }
        };



        fetchData();
    }, []);

    const contextValues = {
       searchResults
    };



    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
