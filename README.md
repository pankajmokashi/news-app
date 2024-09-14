# ACCONEWS

This project consists of a News App built using the following technologies:
- Node.js & Express: For the backend server handling API requests.
- React: For the frontend user interface.
- Redux: For state management on the frontend.
- gnews.io API: For fetching news articles.

- Vercel Link - https://news-app-k89a.vercel.app/

## Pages
1. HomePage
- Description: The homepage of the News App, which displays a list of headlines and includes a search bar. Users can see more headlines by clicking the "Show More" button.
- Features:
  - Search Bar: Allows users to search for news articles.
  - Headlines: Displays a list of current headlines.
  - Show More Button: Fetches and appends more headlines as the user scrolls or clicks the button.
- Path: /

2. SearchPage
- Description: Displays search results based on the user’s query. Includes a search bar and a "Show More" button to load additional search results.
- Features:
  - Search Bar: Allows users to perform new searches.
  - Search Results: Displays articles matching the search query.
  - Show More Button: Fetches and appends more search results.
- Path: /:query (Dynamic route based on search query)

## Backend Routes
/api/headlines
/api/search

## Setup
- Clone the Repository:
```
git clone https://github.com/pankajmokashi/news-app.git
```

### Backend
```
cd backend
```

- Install Dependencies:
```
npm install
```

- Environment Variables:
Create a .env file in the root directory.
```
API_KEY = your_gnews_api_key
BASE_URL = https://gnews.io/api/v4
FRONTEND_BASE_URL = http://localhost:3000
PORT = 5000
```

- Start the Server:
```
npm run dev
```

### Frontend
```
cd frontend
```

- Install Dependencies:
```
npm install
```

- Environment Variables:
Create a .env file in the root directory.
```
REACT_APP_BACKEND_BASEURL = http://localhost:5000
```

- Start the React Application:
```
npm run start
```
