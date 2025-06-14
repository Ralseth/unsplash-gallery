import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './ImageCard.css';

type Props = {
    id: string;
    thumb: string;
    alt: string;
};

export default function ImageCard({ id, thumb, alt }: Props) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFav = favorites.includes(id);

    return (
        <div className="image-card">
            <Link to={`/photo/${id}`}>
                <img src={thumb} alt={alt} />
            </Link>
            <button
                className={`fav-btn ${isFav ? 'active' : ''}`}
                onClick={() => toggleFavorite(id)}
            >
                {isFav ? '💖' : '🤍'}
            </button>
        </div>
    );
}
