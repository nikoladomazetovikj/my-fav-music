import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProfileContext from "../context/ProfileContext.jsx";
import {Row } from "react-bootstrap";
import Header from "../components/Profile/Header.jsx";
import NavHeader from "../components/Layout/Header.jsx";
import Main from "../components/Layout/Main.jsx";
import ArtistTracks from "../components/Profile/ArtistTracks.jsx";


const Profile = () => {
    const { id } = useParams();
    const { setId, profileDetails } = useContext(ProfileContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setId(id);
    }, [id, setId]);

    const profileData = profileDetails?.data;

    const artistTracks = profileData?.artist?.discography; // Perform null/undefined checks

    useEffect(() => {
        if (profileData) {
            setIsLoading(false);
        }
    }, [profileData]);

    return (
        <>
            <NavHeader />
            <Main>
                <Row>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : profileData && profileData.artist ? (
                        <>
                            <Header artistInfo={profileData} />
                            <ArtistTracks artistTracks={artistTracks} />
                        </>
                    ) : (
                        <p>No data available for this artist.</p>
                    )}
                </Row>
            </Main>
        </>
    );
};

export default Profile;
