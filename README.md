# Bookmarker
A full stack bookmark management app built with React, Vite, Flask, and SQLite.

## Overview
Bookmarker lets users create, view, update, and delete bookmarks. It includes:
- a React frontend for interacting with bookmarks
- a Flask backend API for storing bookmarks in SQLite
- CRUD operations: create, read, update, and delete bookmarks
- an edit modal for updating bookmarks
- clickable bookmark links that open in a new tab

## Features
- View bookmarks in a responsive table
- Add new bookmarks with name and URL
- Edit existing bookmarks using a modal form
- Delete bookmarks and refresh the list immediately
- Backend persistence with SQLite and Flask

## Tech stack
- Frontend: React, Vite, JavaScript
- Backend: Flask, Flask-SQLAlchemy, Flask-CORS
- Database: SQLite

## Project structure
- `bookmarker/` — frontend React app
- `backend/` — Flask API and database models

## How to run
1. Start the backend:
   - open a terminal in `backend/`
   - install dependencies if needed (`pip install flask flask-sqlalchemy flask-cors`)
   - run `python main.py`

2. Start the frontend:
   - open a terminal in `bookmarker/`
   - install dependencies if needed (`npm install`)
   - run `npm run dev`

3. Use the app in the browser at the Vite URL shown in the terminal.

## Notes
- The backend uses `sqlite:///mydatabase.db` for local storage.
- The frontend fetches API data from `http://127.0.0.1:5000`.
- Bookmark links are rendered as clickable anchors and open in a new tab.

## What this project demonstrates
- full stack development with React and Flask
- RESTful API design and frontend integration
- form handling, modal state, and dynamic updates
- managing local persistence with SQLite

