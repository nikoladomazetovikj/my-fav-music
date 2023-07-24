import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../../context/AppContext.jsx";

const Results = () => {
    const { searchResults } = useContext(AppContext);

    const artists = searchResults?.artists?.hits || [];

    return (
        <Container>
            <Row>
                {artists.map((artist) => (
                    artist.artist.avatar ? (
                        <Col key={artist.artist.adamid} className='mb-5 col-lg-4 col-md-8 col-12'>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={artist.artist.avatar} />
                                <Card.Body>
                                    <Card.Title>{artist.artist.name}</Card.Title>
                                    <Card.Text>
                                        {/* Additional artist information if needed */}
                                    </Card.Text>
                                    <Button variant="primary" href={`/profile/${artist.artist.adamid}`} >
                                        Go to Profile
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : null
                ))}
            </Row>
        </Container>
    );
};

export default Results;
