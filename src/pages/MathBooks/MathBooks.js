import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import './MathBooks.scss'; // Ensure this file exists
import Footer from "../../components/Footer/Footer";

function MathBooks() {
  const [playlists, setPlaylists] = useState([]); // State to store playlists
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const apiKey = "AIzaSyD-tCtcYWgvtsFBoW9e7lc8FiUvb-hUvow"; // Replace with your API key
  const channelId = "UCX6b17PVsYBQ0ip5gyeme-Q"; // Crash Course Channel ID

  // List of desired keywords
  const desiredKeywords = [
    "math",
    "mathematics",
    "algebra",
    "calculus",
    "geometry",
    "trigonometry",
    "statistics",
    "probability",
  ];

  // List of unwanted keywords
  const unwantedKeywords = [

  ];

  // Fetch playlists from YouTube
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&q=math&channelId=${channelId}&maxResults=50&key=${apiKey}`
        );
        const data = await response.json();
        console.log("Fetched Playlists:", data.items); // Log fetched playlists
        setPlaylists(data.items); // Store fetched playlists
      } catch (error) {
        console.error("Error fetching playlists:", error);
      } finally {
        setIsLoading(false); // Set loading to false
      }
    };

    fetchPlaylists();
  }, [apiKey, channelId]);

  // Filter playlists to include only desired keywords and exclude unwanted keywords
  const filteredPlaylists = playlists.filter((playlist) => {
    const title = playlist.snippet.title.toLowerCase();

    // Check if the title includes any of the desired keywords
    const includesDesiredKeyword = desiredKeywords.some((keyword) =>
      title.includes(keyword)
    );

    // Check if the title excludes all unwanted keywords
    const excludesUnwantedKeyword = !unwantedKeywords.some((keyword) =>
      title.includes(keyword)
    );

    return includesDesiredKeyword && excludesUnwantedKeyword;
  });

  return (
    <>
      <Header />
      <div className="hero-playlist">
        <h1 className="title">Math Playlists</h1>
        {isLoading ? (
          <div className="loading-spinner">Loading playlists...</div>
        ) : filteredPlaylists.length === 0 ? (
          <div className="no-playlists">No matching playlists found.</div>
        ) : (
          <div className="playlist-container">
            {filteredPlaylists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="playlist-button"
              >
                <img
                  src={playlist.snippet.thumbnails.medium.url}
                  alt={playlist.snippet.title}
                />
                <div className="playlist-name">{playlist.snippet.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MathBooks;