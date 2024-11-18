import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL to the state
        setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Display loading text while the API is being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image once it's loaded
      )}
    </div>
  );
}

export default App;
