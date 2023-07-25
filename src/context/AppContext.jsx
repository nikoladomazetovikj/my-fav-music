import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const AppContext = createContext({
    searchResults: []
});

export const AppProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async (searchTerm) => {
        const options = {
            method: "GET",
            url: `${import.meta.env.VITE_API_BASE_URL}/search/`,
            params: {
                q: searchTerm,
                type: 'multi',
                offset: '0',
                limit: '10',
                numberOfTopResults: '15'
            },
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
                "X-RapidAPI-Host": import.meta.env.VITE_RAPID_HOST
            }
        };

        try {
            const response = await axios.request(options);
            setSearchResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const delay = 500;
        const timer = setTimeout(() => {
            fetchData(searchTerm);
        }, delay);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const contextValues = {
        searchResults,
        searchTerm,
        setSearchTerm
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppContext;
