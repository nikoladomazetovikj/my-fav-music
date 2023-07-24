import {Container, Row} from "react-bootstrap";

const NoResults = () => {
    return (
        <Container className='my-5'>
           <Row className='text-center'>
               <h3>Search for your favourite songs, producers, signers... </h3>
               <hr/>
           </Row>
        </Container>
    );
}


export default NoResults;
