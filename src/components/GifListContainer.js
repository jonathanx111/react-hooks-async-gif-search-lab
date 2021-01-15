import { useState, useEffect } from 'react';
import GifList from "./GifList";
import GiftSearch from "./GifSearch";

function GifListsContainer() {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetchGifs()
    }, [])

    function fetchGifs(query="dolphin") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(r => r.json())
            .then(({data}) => {
                const gifs = data.map(gif => 
                    ({ url: gif.images.original.url })
                )
                setGifs(gifs)
            })
           
    }

    return (
        <>
            <GifList gifs={gifs} />
            <GiftSearch fetchGifs={fetchGifs}/>
        </>
    )
}

export default GifListsContainer