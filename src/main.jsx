import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root.jsx';
import Index from './components/Index.jsx'
import Movies from './components/Movies.jsx'
import MovieInfo from './components/MovieInfo.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Index />,
        index: true
      },
      {
        path: "movies",
        element: <Movies />
      },
      {
        path: "movies?=:movieId",
        element: <MovieInfo />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
