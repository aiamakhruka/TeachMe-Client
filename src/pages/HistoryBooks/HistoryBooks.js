import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import './HistoryBooks.scss'; // Ensure this file exists
import Footer from "../../components/Footer/Footer";

function HistoryBooks() {
  // Static playlist data with YouTube thumbnail URLs
  const playlists = [
    {
      id: "PPL8dPuuaLjXtMsMTfmRomkVQG8AqrAmJFX", // Playlist ID
      snippet: {
        title: "World War II History",
        thumbnails: {
          medium: {
            url: "https://i.ytimg.com/vi/WhtuC9dp0Hk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_L722sPRZFLdu8FSfr7BpLCIAWw", // YouTube thumbnail URL
          },
        },
      },
    },
    {
      id: "PPL8dPuuaLjXtMsMTfmRomkVQG8AqrAmJFX", // Playlist ID
      snippet: {
        title: "World War II History",
        thumbnails: {
          medium: {
            url: "https://i.ytimg.com/vi/WhtuC9dp0Hk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_L722sPRZFLdu8FSfr7BpLCIAWw", // YouTube thumbnail URL
          },
        },
      },
    },
    {
      id: "PPL8dPuuaLjXtMsMTfmRomkVQG8AqrAmJFX", // Playlist ID
      snippet: {
        title: "World War II History",
        thumbnails: {
          medium: {
            url: "https://i.ytimg.com/vi/WhtuC9dp0Hk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_L722sPRZFLdu8FSfr7BpLCIAWw", // YouTube thumbnail URL
          },
        },
      },
    },
    {
      id: "PPL8dPuuaLjXtMsMTfmRomkVQG8AqrAmJFX", // Playlist ID
      snippet: {
        title: "World War II History",
        thumbnails: {
          medium: {
            url: "https://i.ytimg.com/vi/WhtuC9dp0Hk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_L722sPRZFLdu8FSfr7BpLCIAWw", // YouTube thumbnail URL
          },
        },
      },
    },
    {
      id: "PPL8dPuuaLjXtMsMTfmRomkVQG8AqrAmJFX", // Playlist ID
      snippet: {
        title: "World War II History",
        thumbnails: {
          medium: {
            url: "https://i.ytimg.com/vi/WhtuC9dp0Hk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_L722sPRZFLdu8FSfr7BpLCIAWw", // YouTube thumbnail URL
          },
        },
      },
    },
    {
      id: "PPL8dPuuaLjXtMsMTfmRomkVQG8AqrAmJFX", // Playlist ID
      snippet: {
        title: "World War II History",
        thumbnails: {
          medium: {
            url: "https://i.ytimg.com/vi/WhtuC9dp0Hk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_L722sPRZFLdu8FSfr7BpLCIAWw", // YouTube thumbnail URL
          },
        },
      },
    }
  ];

  return (
    <>
      <Header />
      <div className="hero-playlist">
        <h1 className="title">History Playlists</h1>
        <div className="playlist-container">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="playlist-button"
            >
              <img
                src={playlist.snippet.thumbnails.medium.url}
                alt={playlist.snippet.title}
                className="playlist-thumbnail"
              />
              <div className="playlist-name">{playlist.snippet.title}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HistoryBooks;