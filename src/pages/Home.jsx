import Header from "../components/Layout/Header.jsx";
import {useContext} from "react";
import AppContext from "../context/AppContext.jsx";

const Home = () => {

    const {searchResults} = useContext(AppContext);

    console.log(searchResults)
    return (
        <>
            <Header/>
        </>
    );
}

export default Home
