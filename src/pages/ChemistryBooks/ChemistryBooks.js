import React, { useState } from "react";
import FetchVideos from "../../components/FetchVideos/FetchVideos";
import OpenStaxBook from "../../components/FetchBooks/FetchBooks";
import Header from "../../components/Header/Header";
import './ChemistryBooks.scss'; // Import the SCSS file
import Footer from "../../components/Footer/Footer";

function ChemistryBooks() {
  // OpenStax Book Example
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
    },
    {
      id: "PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4", // Biochemistry
      name: "Biochemistry",
      thumbnail: "https://img.youtube.com/vi/UYl4fE4GDfw/hqdefault.jpg"
    },
    {
      id: "PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4", // Biochemistry
      name: "Biochemistry",
      thumbnail: "https://img.youtube.com/vi/UYl4fE4GDfw/hqdefault.jpg"
    },
    {
      id: "PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4", // Biochemistry
      name: "Biochemistry",
      thumbnail: "https://img.youtube.com/vi/UYl4fE4GDfw/hqdefault.jpg"
    },
    {
      id: "PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4", // Biochemistry
      name: "Biochemistry",
      thumbnail: "https://img.youtube.com/vi/UYl4fE4GDfw/hqdefault.jpg"
    },
    {
      id: "PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4", // Biochemistry
      name: "Biochemistry",
      thumbnail: "https://img.youtube.com/vi/UYl4fE4GDfw/hqdefault.jpg"
    }
  ];

  // State to track the selected playlist
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

 // Handle button click to open a new window with the playlist
 const handlePlaylistClick = (playlistId) => {
  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <html>
      <head>
        <title>Playlist Videos</title>
        <link rel="stylesheet" href="/path/to/your/styles.css" />
      </head>
      <body>
        <div id="root"></div>
        <script src="/path/to/your/PlaylistPage.js"></script>
        <script>
          ReactDOM.render(
            React.createElement(PlaylistPage, { playlistId: "${playlistId}" }),
            document.getElementById('root')
          );
        </script>
      </body>
    </html>
  `);
  newWindow.document.close();
};

  return (
    <>
      <Header />
      <div className="hero-playlist">
        <h1 className="title">Chemistry Books</h1>
        <div className="playlist-container">
          {chemistryPlaylists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => handlePlaylistClick(playlist.id)}
              className="playlist-button"
            >
              <img
                src={playlist.thumbnail}
                alt={playlist.name}
              />
              <div className="playlist-name">{playlist.name}</div>
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
      <Footer/>
    </>
  );
}

export default ChemistryBooks;