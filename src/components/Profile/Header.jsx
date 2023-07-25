import PropTypes from "prop-types";

const Header = ({artistInfo}) => {

    const artistData = artistInfo.artist;

    console.log(artistData)
    return (
        <>
            <h1>{artistData.profile.name}</h1>
            <hr/>
            <p>{artistData.profile.biography.text}</p>
        </>
    );

}

Header.propTypes = {
    artistInfo: PropTypes.array.isRequired
};

export default Header;
