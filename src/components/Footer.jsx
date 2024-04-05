import { useState } from "react"


export default function Footer({description}) {

    const [hintsState, setHintsState] = useState(false)

    function showHints() {
        setHintsState(true)
    }

    function hindHints() {
        setHintsState(false)
    }

    return (
        <footer className="footer">
            <button 
                className="reload"
                onClick={() => window.location.reload()}
            >
                Reload
            </button>
            <button 
                className="hints"
                onClick={showHints}
            >
                Hints
            </button>
            {
                hintsState && 
                <div className="pop-up">
                    <div className="info">
                        <div className="header">
                        <p>Hints For Movie</p>
                        <button onClick={hindHints}>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                        </div>
                        <div className="movie-description">
                            {description}
                        </div>
                    </div>
                </div>
            }
        </footer>
    )
}