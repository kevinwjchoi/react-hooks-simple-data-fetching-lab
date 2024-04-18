import React, {useEffect, useState} from "react";

function App(){
    const [images, setImages] = useState([]);
    
    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then ((data) => {
        setImages(data.message);
      
    })
    
    }, []);
    console.log(images)

    if (!images) {
            return <p>Loading...</p>
    }

    return(

        <>
            <h2>Title</h2>
            <img src={images} alt="A Random Dog" ></img>
        </>
    )





}

export default App; 