import PropTypes from "prop-types";
import {Card, ListGroup} from "react-bootstrap";

const MostPopular = ({ popular }) => {
    if (!popular || popular.length === 0) {
        return <p>No Songs available.</p>;
    }

    return (
        <>
            {popular.map((song) => (
                <Card key={song.releases.items[0].id} style={{ width: '15rem' }} className='m-3'>
                   <a href={song.releases.items[0].sharingInfo.shareUrl} target='_blank' className='text-decoration-none' rel='noreferrer'>
                       <ListGroup variant="flush">
                           <ListGroup.Item>{song.releases.items[0].name}</ListGroup.Item>
                           {/*<Button variant="primary">Go somewhere</Button>*/}
                       </ListGroup>
                   </a>
                </Card>

            ))}
        </>
    );
}

MostPopular.propTypes = {
    popular: PropTypes.array
}

export default MostPopular;
