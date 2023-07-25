import PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";
import Albums from "./Albums.jsx";
import MostPopular from "./MostPopular.jsx";


const ArtistTracks = ({artistTracks}) => {

    const albums = artistTracks.albums.items
    const mostPopular = artistTracks.popularReleases.items;

    console.log(mostPopular)
    return (
        <Container>
            <Row>
                <h3>Albums</h3>
                <hr/>
                <Albums albums={albums}/>
            </Row>
            <Row>
                <h3>Most Popular</h3>
                <hr/>
                <MostPopular popular={mostPopular}/>
            </Row>
        </Container>
    );

}

ArtistTracks.propTypes = {
    artistTracks: PropTypes.object.isRequired,
};


export default ArtistTracks;
