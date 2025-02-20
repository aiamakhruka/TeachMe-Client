import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubePlaylist = ({ playlistId, apiKey }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: 'snippet',
              maxResults: 20,
              playlistId: playlistId,
              key: apiKey,
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube playlist:', error);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId, apiKey]);

  return (
    <div>
      <h2>YouTube Playlist</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubePlaylist;
