import React, { useState, useEffect } from "react";

function App () {
    const [randomDogImage, setRandomDogImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then((data) => {
                setRandomDogImage(data.message)
                setIsLoaded(true)
            })
    }, [])
    
    if(!isLoaded) return <p>Loading...</p>

    return (
        <>
            <img src={randomDogImage} alt="A Random Dog"/>
        </>
    )
}

export default App