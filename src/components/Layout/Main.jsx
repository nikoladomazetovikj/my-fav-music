import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

const Main = ({children}) => {

    return (
      <Container className='my-5'>
          <Row>
              {children}
          </Row>
      </Container>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
