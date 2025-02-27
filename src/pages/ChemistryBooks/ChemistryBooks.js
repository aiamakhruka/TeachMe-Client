import React, { useEffect, useState } from "react";
import FetchVideos from "../../components/FetchVideos/FetchVideos";
import OpenStaxBook from "../../components/FetchBooks/FetchBooks";
import Header from "../../components/Header/Header";
import './ChemistryBooks.scss';
import Footer from "../../components/Footer/Footer";

function ChemistryBooks() {
  const [playlists, setPlaylists] = useState([]); // State to store playlists
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const apiKey = "AIzaSyDd5WSWpm_HmfC07XK25MXT8paVZHP2Vqg"; // Replace with your API key
  const channelId = "UCX6b17PVsYBQ0ip5gyeme-Q"; // Crash Course Channel ID

  // Fetch playlists from YouTube
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=100&key=${apiKey}`
        );
        const data = await response.json();
        setPlaylists(data.items); // Store fetched playlists
      } catch (error) {
        console.error("Error fetching playlists:", error);
      } finally {
        setIsLoading(false); // Set loading to false
      }
    };

    fetchPlaylists();
  }, [apiKey, channelId]);

  // Handle button click to open a new window with the playlist
  const handlePlaylistClick = (playlistId) => {
    window.open(`/playlist/${playlistId}`, "_blank");
  };

  return (
    <>
      <Header />
      <div className="hero-playlist">
        <h1 className="title">Crash Course Playlists</h1>
        {isLoading ? (
          <div className="loading-spinner">Loading playlists...</div>
        ) : (
          <div className="playlist-container">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => handlePlaylistClick(playlist.id)}
                className="playlist-button"
              >
                <img
                  src={playlist.snippet.thumbnails.medium.url}
                  alt={playlist.snippet.title}
                />
                <div className="playlist-name">{playlist.snippet.title}</div>
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ChemistryBooks;