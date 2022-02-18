// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from './components/Container/Container';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { Layout } from 'components/Layout';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { HomeView } from 'pages/HomeView';
import { Movies } from 'pages/Movies';
import { NotFoundView } from 'pages/NotFoundView';
import './App.css';

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Container>
  );
}
