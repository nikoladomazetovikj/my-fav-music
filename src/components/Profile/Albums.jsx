import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Albums = ({ albums }) => {


    if (!albums || albums.length === 0) {
        return <p>No albums available.</p>;
    }

    return (
        <>
            {albums.map((album) => (

                <Card key={album.releases.items[0].id} className='m-3 text-bg-dark text-white' style={{width: '15rem'}}>
                    <Card.Img variant="top" src={album.releases.items[0].coverArt.sources[0].url} />
                    <Card.Body>
                        <Card.Text>
                            {album.releases.items[0].name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

Albums.propTypes = {
    albums: PropTypes.array,
};

export default Albums;
