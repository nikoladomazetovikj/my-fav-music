import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import AppContext from "../../context/AppContext.jsx";

const Results = () => {
    const { searchResults } = useContext(AppContext);

    const artists = searchResults?.artists?.items || [];

    console.log(artists);
    return (
        <Container>
            <Row>
                {artists.map((artist) => {

                    const avatarUrl = artist?.data?.visuals?.avatarImage?.sources[0]?.url || '';
                    const artistName = artist?.data?.profile?.name || 'Unknown Artist';
                    const artistId = artist?.data?.uri || '';

                    const uriParts = artist?.data?.uri.split(":");
                    const artistProfileId = uriParts?.[uriParts.length - 1] || '';

                    return (
                        <Col key={artistId} className='mb-5 col-lg-4 col-md-8 col-12'>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={avatarUrl} />
                                <Card.Body>
                                    <Card.Title>{artistName}</Card.Title>
                                    <Card.Text>
                                        {/* Additional artist information if needed */}
                                    </Card.Text>
                                    <Button variant="primary" href={`/profile/${artistProfileId}`} >
                                        Go to Profile
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Results;
