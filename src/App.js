import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video thumbnails from the API
    axios
      .get("/api/videos/thumbnails")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div>
        <h1>Tokopedia Play Clone</h1>
        <ul>
          {videos.map((video) => (
            <li key={video.VideoID}>
              <Link to={`/videos/${video.VideoID}`}>
                <img src={video.UrlImageThumbnail} alt={`Video Thumbnail ${video.VideoID}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;
