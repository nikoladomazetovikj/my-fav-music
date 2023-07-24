import {Container, Row} from "react-bootstrap";

const NotFound = () => {

    return (
        <Container className='my-5'>
            <Row className='text-center'>
                <h1>404 Error</h1>
                <hr/>
                <h3>Page not Found</h3>
            </Row>
        </Container>
    );
}


export default NotFound;
