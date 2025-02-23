import React, { useState } from "react";
import FetchVideos from "../../components/FetchVideos/FetchVideos";
import OpenStaxBook from "../../components/FetchBooks/FetchBooks";
function ChemistryBooks() {

          {/* OpenStax Book Example */}
          <OpenStaxBook 
          bookTitle="Algebra and Trigonometry" 
          bookUrl="https://openstax.org/books/algebra-and-trigonometry/pages/1-introduction"
/>
  // Playlist data for different chemistry topics
  const chemistryPlaylists = [
    {
      id: "PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr", // General Chemistry
      name: "General Chemistry",
      thumbnail: "https://img.youtube.com/vi/bSMx0NS0XfY/hqdefault.jpg"
    },
    {
      id: "PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H", // Organic Chemistry
      name: "Organic Chemistry",
      thumbnail: "https://img.youtube.com/vi/QXTjOe70b3I/hqdefault.jpg"
    },
    {
      id: "PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4", // Biochemistry
      name: "Biochemistry",
      thumbnail: "https://img.youtube.com/vi/UYl4fE4GDfw/hqdefault.jpg"
    }
  ];

  // State to track the selected playlist
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

  // Handle button click to update the selected playlist
  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };

  return (
    <div>
      <h1>Chemistry Books</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {chemistryPlaylists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => handlePlaylistClick(playlist.id)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "0",
              textAlign: "center",
            }}
          >
            <img
              src={playlist.thumbnail}
              alt={playlist.name}
              style={{
                width: "150px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div>{playlist.name}</div>
          </button>
        ))}
      </div>

      {/* Render the selected playlist */}
      {selectedPlaylistId && (
        <FetchVideos
          playlistId={selectedPlaylistId}
          apiKey={"AIzaSyDd5WSWpm_HmfC07XK25MXT8paVZHP2Vqg"}
        />
      )}
    </div>
  );
}

export default ChemistryBooks;
