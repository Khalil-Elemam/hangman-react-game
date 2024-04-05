

export default function Hangman({tries}) {

    return (
        <div className="hangman">
            <div className="stage">
                <div className="perpendicular"></div>
                <div className="base"></div>
            </div>
            <Person tries = {tries}/>
        </div>
    )
}

function Person({tries}) {
    return (
        <div className="person">
            {tries >= 1 && <div className="head"></div>}
            <div className="body">
                {tries >= 2 && <div className="chest"></div>}
                {tries >= 3 && <div className="left-hand"></div>}
                {tries >= 4 && <div className="right-hand"></div>}
                {tries >= 5 && <div className="left-leg"></div>}
                {tries >= 6 && <div className="right-leg"></div>}
            </div>
        </div>
    )
}