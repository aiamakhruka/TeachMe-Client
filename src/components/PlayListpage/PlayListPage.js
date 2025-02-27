import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchVideos from "../../components/FetchVideos/FetchVideos";
import './PlayListPage.scss';
function PlaylistPage() {
  const { playlistId } = useParams(); // Get the playlistId from the URL
  const [playlistTitle, setPlaylistTitle] = useState(""); // State to store the playlist title
  const apiKey = "AIzaSyDd5WSWpm_HmfC07XK25MXT8paVZHP2Vqg"; // Your YouTube API key

  // Fetch the playlist title
  useEffect(() => {
    const fetchPlaylistTitle = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setPlaylistTitle(data.items[0].snippet.title); // Set the playlist title
        }
      } catch (error) {
        console.error("Error fetching playlist title:", error);
      }
    };

    fetchPlaylistTitle();
  }, [playlistId, apiKey]);

  return (
    <div className="playlist-page">
      <h1 className="playlist_title" >{playlistTitle || "Loading Playlist..."}</h1> {/* Display the playlist title */}
      <div className="video-grid">
        <FetchVideos
          playlistId={playlistId}
          apiKey={apiKey}
        />
      </div>
    </div>
  );
}

export default PlaylistPage;