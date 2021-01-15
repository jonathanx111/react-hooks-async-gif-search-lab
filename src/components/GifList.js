function GifList({ gifs }) {
    return (
        <ul>
        {gifs.map((gif) => (
            <li key={gif.url}>
                <img src={gif.url} alt="gif"></img>
            </li>
        ))}
        </ul>
    )
}

export default GifList