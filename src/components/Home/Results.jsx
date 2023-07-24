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
                    <Col key={artist.artist.adminid} className='mb-5 col-lg-4 col-md-8 col-12'>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={artist.artist.avatar} />
                            <Card.Body>
                                <Card.Title>{artist.artist.name}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary"  target="_blank">Go to Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Results;
