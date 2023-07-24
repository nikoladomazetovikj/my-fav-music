import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Playlist from "./pages/Playlist.jsx";
import LikedSongs from "./pages/LikedSongs.jsx";
import NotFound from "./pages/NotFound.jsx";
import History from "./pages/History.jsx";


function App() {

    return (
       <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/playlist' element={<Playlist />}/>
                <Route path='/history' element={<History/>}/>
                <Route path='/liked-songs' element={<LikedSongs/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
       </BrowserRouter>
    );
}

export default App
