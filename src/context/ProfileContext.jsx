import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";


const ProfileContext = createContext({
    profileDetails: [],
    id: null,
});

export const ProfileProvider = ({children}) => {

    const [profileDetails, setProfileDetails] = useState([]);
    const [id, setId] = useState(null);

    const fetchProfileDetails = async (id) => {
        const options = {
            method: "GET",
            url: `${import.meta.env.VITE_API_BASE_URL}/artist_overview/`,
            params: {
                id: id,
            },
            headers: {
                "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
                "X-RapidAPI-Host": import.meta.env.VITE_RAPID_HOST
            }
        };

        try {
            const response = await axios.request(options);
            setProfileDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        if (id) {
            fetchProfileDetails(id);
        }
    }, [id]);

    const contextValues = {
        profileDetails,
        id,setId
    };


    return <ProfileContext.Provider value={contextValues}>
        {children}
    </ProfileContext.Provider>
}


ProfileProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default ProfileContext;
