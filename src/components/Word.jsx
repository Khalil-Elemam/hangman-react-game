

export default function Word({word, solvedChars}) {
    if(word === undefined || word === 'movie') {
        return (
            <div className="word">
                <h3>Loading...</h3>
            </div>
        )
    }

    const chars = word.split("").map((char, i) => (
            <input 
                type="text" 
                key={i} 
                maxLength={1} 
                readOnly
                value={solvedChars.includes(i) ? char : ""}
            />
    ))

    return (
        <div className="word">
            {chars}
        </div>
    )
}