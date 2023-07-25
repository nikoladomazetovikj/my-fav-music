import Header from "../components/Layout/Header.jsx";
import {useContext} from "react";
import AppContext from "../context/AppContext.jsx";
import NoResults from "../components/Home/NoResults.jsx";
import Search from "../components/Home/Search.jsx";
import Main from "../components/Layout/Main.jsx";
import Results from "../components/Home/Results.jsx";

const Home = () => {

    const {searchResults} = useContext(AppContext);

    return (
        <>
            <Header/>
            <Main>
                <Search/>
                {searchResults?.albums?.totalCount === 0 ? (
                    <NoResults/>
                ) : <Results/>}
            </Main>
        </>
    );
}

export default Home
