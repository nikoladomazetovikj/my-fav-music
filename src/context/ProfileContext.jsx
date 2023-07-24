import {createContext} from "react";
import PropTypes from "prop-types";


const ProfileContext = createContext({
    profileDetails: []
});

export const ProfileProvider = ({children}) => {


    const contextValues = {};


    return <ProfileContext.Provider value={contextValues}>
        {children}
    </ProfileContext.Provider>
}


ProfileProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default ProfileContext;
