import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import PhotoPage from './pages/PhotoPage';
import { FavoritesProvider } from './context/FavoritesContext';

export default function App() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/photo/:id" element={<PhotoPage />} />
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    );
}
