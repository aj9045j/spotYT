# 🎵 SpotYT 🎵

Welcome to **SpotYT** – your one-stop destination for seamless music experience! Integrating the best of Spotify and YouTube, SpotYT lets you search for playlists, discover new songs, and manage your music preferences with ease.



## 🌟 Features

- 🔐 **User Authentication**: Secure user registration and login.
- 🎶 **Playlist Search**: Find your favorite Spotify playlists.
- 📺 **YouTube Integration**: Fetch related YouTube videos for any song.
- 🛠️ **User Management**: View and manage your details and playlists.

## 💻 Technologies

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and playlist data.
- **Mongoose**: ODM for MongoDB.
- **Body-parser**: Middleware for parsing request bodies.
- **Cookie-parser**: Middleware for parsing cookies.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for routing in React applications.

## 🚀 Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/aj9045j/SpotYT.git
    cd SpotYT
    ```

2. Install dependencies:
    ```sh
    cd backend
    npm install
    ```
    
3. Start the server:
    ```sh
    node server.js
    ```

### Frontend Setup

1. Install dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

2. Start the React application:
    ```sh
    npm start
    ```

## 🛠️ Usage

- **Login/Register**: Create a new account or log in to an existing one.
- **Search Playlists**: Use the search functionality to find Spotify playlists.
- **Fetch YouTube Videos**: Get related YouTube videos for any song.
- **View and Manage**: Check your user details and manage your playlists.

## 📡 API Endpoints

### Authentication

- `POST /login`: User login.
- `POST /register`: User registration.

### Playlist and Song Search

- `POST /search`: Search for Spotify playlists.
- `POST /searchyt`: Search for YouTube videos.

### User and Playlist Management

- `GET /api/getuser`: Get user details.
- `GET /auth`: Redirect for authentication.
- `GET /fetchsong/:playlistId`: Fetch songs from a playlist.
- `GET /fetchurl/:query`: Fetch a YouTube video URL.
- `GET /fetchPlaylist/:email`: Fetch playlists by user email.
- `GET /fetchImage/:query`: Fetch images related to the query.

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository, make enhancements, and submit pull requests. Let's make spotYT even better together!

Feel free to reach out if you have any questions or suggestions. Let's create something amazing together!



---

Made with ❤️ by [aj9045j](https://github.com/aj9045j).
# kp
