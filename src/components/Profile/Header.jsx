import PropTypes from "prop-types";

const Header = ({artistInfo}) => {

    const artistData = artistInfo[0].attributes;

    const genres = artistData.genreNames;
    const displayGenres = genres.join(" ");

    return (
        <>
            <h1>{artistData.name}</h1>
            <hr/>
            <span>Genres: {displayGenres}</span>
        </>
    );

}

Header.propTypes = {
    artistInfo: PropTypes.array.isRequired
};

export default Header;