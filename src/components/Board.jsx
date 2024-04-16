
export default function Board({handleClick, isGameEnd}) {

    const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const keys = chars.map((char, index) => (
        <Character 
            value = {char} 
            key = {index} 
            handleClick = {handleClick}
            isGameEnd = {isGameEnd}
        />
    ))
    
    return (
        <div className="keys">
            {keys}
        </div>
    )
}

function Character({handleClick, isGameEnd, value}) {
    return (
        <button 
            className= {`character-btn ${!isGameEnd ? 'enabled' : ''}`} 
            onClick={(event) => handleClick(event)} 
            value={value}
            disabled = {isGameEnd}
        >
            {value}
        </button>
    )
}