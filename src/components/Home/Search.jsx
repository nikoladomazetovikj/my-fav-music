import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useContext} from "react";
import AppContext from "../../context/AppContext.jsx";

const Search = () => {

    const {setSearchTerm} = useContext(AppContext);


    const handleOnKeyboardUp = (event) => {
        event.preventDefault()

        setSearchTerm(event.target.value)
    }

    return (
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="search">Search...</InputGroup.Text>
            <Form.Control
                aria-label="Search"
                aria-describedby="search"
                onInput={handleOnKeyboardUp}
            />
        </InputGroup>
    );
}


export default Search;
