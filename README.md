# SamWholeSale Project

A modern web application with a Vite + React frontend and a minimal Express.js backend.

## Project Structure

```
.
├── frontend/          # Vite + React application
│   ├── src/          # React components and source files
│   ├── public/       # Static assets
│   └── package.json
├── backend/          # Express.js server
│   ├── server.js     # Main server file
│   └── package.json
└── package.json      # Root package.json with convenience scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Install frontend dependencies:
```bash
cd frontend
npm install
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

## Running the Application

### Option 1: Run both servers separately

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will be available at http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```
The backend will be available at http://localhost:3001

### Option 2: Run from root (Windows)

```bash
npm run dev
```

This will start both servers simultaneously.

## API Endpoints

The backend provides the following endpoints:

- `GET /api` - Welcome message
- `GET /api/hello` - Hello message
- `GET /api/data` - Sample data array

## Technology Stack

### Frontend
- ⚡ Vite - Fast build tool and dev server
- ⚛️ React - UI library
- 🎨 CSS - Styling

### Backend
- 🚀 Express.js - Web framework
- 🔌 CORS - Cross-origin resource sharing
- 📦 Node.js - Runtime environment

## Development

- Frontend uses Vite's hot module replacement (HMR) for instant updates
- Backend uses Node.js --watch flag for auto-restart on file changes
- CORS is enabled to allow frontend-backend communication

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`

## License

MIT
