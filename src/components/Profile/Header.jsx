import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const Header = ({ artistInfo }) => {

    if (!artistInfo || !artistInfo.artist) {
        return null;
    }

    const artistData = artistInfo.artist;

    return (
        <>
            <Col>
                <h1>{artistData.profile?.name || 'Unknown Artist'}</h1>
            </Col>
            <Col className='text-end'>
                <Image src={artistData.visuals?.avatarImage?.sources[0]?.url} width='150' height='150' roundedCircle />
            </Col>
            <hr />
            <p>{artistData.profile?.biography?.text || 'No biography available.'}</p>
        </>
    );
}

Header.propTypes = {
    artistInfo: PropTypes.object.isRequired,
};

export default Header;
