import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProfileContext from "../context/ProfileContext.jsx";
import { Container, Row } from "react-bootstrap";
import Header from "../components/Profile/Header.jsx";

const Profile = () => {
    const { id } = useParams();
    const { setId, profileDetails } = useContext(ProfileContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setId(id);
    }, [id, setId]);

    const profileData = profileDetails?.data;

    useEffect(() => {
        if (profileData) {
            setIsLoading(false);
        }
    }, [profileData]);

    return (
        <Container className="my-5">
            <Row>
                {isLoading ? (
                    <p>Loading...</p>
                ) : profileData.length === 0 ? (
                    <p>No data available for this artist.</p>
                ) : (
                    <Header artistInfo={profileData} />
                )}
            </Row>
        </Container>
    );
};

export default Profile;
