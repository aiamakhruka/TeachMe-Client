// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import './ChemistryBooks.scss'; // Ensure this file exists
// import Footer from "../../components/Footer/Footer";

// // Import local thumbnails
// import thumbnail1 from "https://i.ytimg.com/vi/tpIctyqH29Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnCmsASI-hO0QDnDfn1TaMbLcSDQ";
// import thumbnail2 from "https://i.ytimg.com/vi/tpIctyqH29Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnCmsASI-hO0QDnDfn1TaMbLcSDQ";
// import thumbnail3 from "https://i.ytimg.com/vi/tpIctyqH29Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnCmsASI-hO0QDnDfn1TaMbLcSDQ";
// import thumbnail4 from "https://i.ytimg.com/vi/tpIctyqH29Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnCmsASI-hO0QDnDfn1TaMbLcSDQ";
// import thumbnail5 from "https://i.ytimg.com/vi/tpIctyqH29Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnCmsASI-hO0QDnDfn1TaMbLcSDQ";


// function ChemistryBooks() {
//   // Static playlist data with local thumbnails
//   const playlists = [
//     {
//       id: "PL8dPuuaLjXtNjasccl-WajpONGX3zoY4M",
//       snippet: {
//         title: "Organic Chemistry Basics",
//         thumbnails: {
//           medium: {
//             url: thumbnail1, // Use local thumbnail
//           },
//         },
//       },
//     },
//     {
//       id: "PL8dPuuaLjXtMwV2btpcij8S3YohW9gUGN",
//       snippet: {
//         title: "Inorganic Chemistry",
//         thumbnails: {
//           medium: {
//             url: thumbnail2, // Use local thumbnail
//           },
//         },
//       },
//     },
//     {
//       id: "PL8dPuuaLjXtMwmepBjTSG593eG7ObzO7s",
//       snippet: {
//         title: "Physical Chemistry Concepts",
//         thumbnails: {
//           medium: {
//             url: thumbnail3, // Use local thumbnail
//           },
//         },
//       },
//     },
//     {
//       id: "PL8dPuuaLjXtNjasccl-WajpONGX3zoY4M",
//       snippet: {
//         title: "Chemical Reactions",
//         thumbnails: {
//           medium: {
//             url: thumbnail4, // Use local thumbnail
//           },
//         },
//       },
//     },
//     {
//       id: "PL8dPuuaLjXtNjasccl-WajpONGX3zoY4M",
//       snippet: {
//         title: "Periodic Table Explained",
//         thumbnails: {
//           medium: {
//             url: thumbnail5, // Use local thumbnail
//           },
//         },
//       },
//     },
//   ];

//   return (
//     <>
//       <Header />
//       <div className="hero-playlist">
//         <h1 className="title">Chemistry Playlists</h1>
//         <div className="playlist-container">
//           {playlists.map((playlist) => (
//             <Link
//               key={playlist.id}
//               to={`/playlist/${playlist.id}`}
//               className="playlist-button"
//             >
//               <img
//                 src={playlist.snippet.thumbnails.medium.url}
//                 alt={playlist.snippet.title}
//                 className="playlist-thumbnail"
//               />
//               <div className="playlist-name">{playlist.snippet.title}</div>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ChemistryBooks;