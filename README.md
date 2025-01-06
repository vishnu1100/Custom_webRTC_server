
# Custom WebRTC Server Using Node

A simple web application for creating and joining video conferencing rooms using **Node.js**, **Socket.IO**, and **SimplePeer**. Users can create or join rooms and communicate via video and audio in real-time.

---

## Features

- **Room Management**: Create and join unique rooms using a room ID.
- **Video and Audio Streaming**: Real-time peer-to-peer video and audio streaming.
- **WebRTC Integration**: Uses WebRTC for high-quality communication.
- **Responsive UI**: Simple and user-friendly interface.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd custom-webrtc-server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

---

## Usage

### 1. **Start the server**

Run the following command to start the backend server:

```bash
node server.js
```

The server will start at `http://localhost:3000`.

---

### 2. **Open the frontend**

Use a local development server (e.g., VS Code's Live Server) to open the `index.html` file or simply open it in your browser at:

```
http://127.0.0.1:5500
```

---

### 3. **How to Use**

- Enter a **room ID** in the input field.
- Click `Create Room` to create a new room.
- Share the room ID with other participants.
- Other participants can join the room by entering the same room ID and clicking `Join Room`.

---

## File Structure

```
custom-webrtc-server/
├── index.html          # Frontend code (HTML, JavaScript)
├── server.js           # Backend server (Node.js with Socket.IO)
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## Dependencies

### Backend

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **socket.io**: Enables real-time, bi-directional communication.

Install these dependencies via:

```bash
npm install express socket.io cors
```

---

### Frontend

- **SimplePeer**: Handles WebRTC connections.
- **Socket.IO Client**: Communicates with the Socket.IO server.

These libraries are included via CDN:

```html
<script src="https://cdn.socket.io/4.0.0/socket.io.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-peer/simplepeer.min.js"></script>
```

---

## Troubleshooting

### Common Errors

#### **CORS Issues**
If the frontend and backend are served from different origins (e.g., `http://127.0.0.1:5500` and `http://localhost:3000`), ensure CORS is configured in the server:

- Add the following to `server.js`:

  ```javascript
  const cors = require('cors');
  app.use(cors());
  ```

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contributors

- **Your Name** (Project Owner)  
  Feel free to contribute by submitting pull requests or reporting issues!

---

## Demo

Once the application is set up, you can demo it locally by:
1. Running the server at `http://localhost:3000`.
2. Opening the frontend in multiple tabs or devices.
3. Testing room creation and joining with video/audio streaming.

---

Enjoy building your custom WebRTC server with Node.js! 🚀
