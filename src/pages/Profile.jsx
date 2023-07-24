import {useParams} from "react-router-dom";

const Profile = () => {
    const { id } = useParams();

    return (
        <h1>Profile details for {id} ...</h1>
    );
}


export default Profile;
