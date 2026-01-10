# SamWholeSale Project

A modern web application with a Vite + React frontend and a minimal Express.js backend.

## Project Structure

```
.
├── frontend/              # Vite + React application
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── main.jsx      # Entry point
│   │   ├── assets/       # Images and static assets
│   │   └── templates/    # HTML landing page templates
│   ├── public/           # Static public assets
│   └── package.json
├── backend/              # Express.js server
│   ├── server.js        # Main server file
│   └── package.json
├── .gitignore           # Git ignore rules
└── package.json         # Root package.json with scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

Install all dependencies at once from the project root:
```bash
npm run install:all
```

Or install separately:
```bash
# Frontend
cd frontend && npm install

# Backend
cd backend && npm install
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

### Option 2: Run both from root (Recommended)

```bash
npm run dev
```

This starts both servers simultaneously using concurrently.

> **Note:** First time? Run `npm install` in the root directory to install `concurrently`.

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
