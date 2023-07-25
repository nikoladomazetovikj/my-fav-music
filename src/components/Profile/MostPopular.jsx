import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const MostPopular = ({ popular }) => {
    if (!popular || popular.length === 0) {
        return <p>No Songs available.</p>;
    }

    return (
        <>
            {popular.map((song) => (
                <Card key={song.releases.items[0].id} style={{ width: '15rem' }} className='m-3'>
                    <Card.Img variant="top" src={song.releases.items[0].coverArt.sources[0].url} />
                    <Card.Body>
                        <Card.Text>{song.releases.items[0].name}</Card.Text>
                        {/*<Button variant="primary">Go somewhere</Button>*/}
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

MostPopular.propTypes = {
    popular: PropTypes.array
}

export default MostPopular;
