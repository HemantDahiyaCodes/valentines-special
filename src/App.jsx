import { ValentineGifPlayer } from "../components/ValentineGIFPlayer";
import "../styles/homepage-styles.css";

function App() {
    return (
        <div className="main-container">
            <h1><span className="heart-emoji">&#9825;</span> To my wifey — the most beautiful part of my life <span className="heart-emoji">&#9825;</span></h1>
            <ValentineGifPlayer />
        </div>
    )
}

export default App