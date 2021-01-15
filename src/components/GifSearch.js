import { useState } from 'react'
function GifSearch({ fetchGifs }) {
    const [search, setSearch] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault()
        fetchGifs(search)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Enter a Search Term:</label>
            <input onChange={e => setSearch(e.target.value)} value={search} id="search" type="text" placeholder="Giphys"></input>
            <input type="submit" value="Find Gifs"></input>
        </form>
    )
}

export default GifSearch