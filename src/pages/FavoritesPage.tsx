import React, {useEffect, useState} from 'react';
import {fetchPhotoById, Photo} from '../api/unsplash';
import ImageCard from '../components/ImageCard';
import { useFavorites } from '../context/FavoritesContext';
import Loader from '../components/Loader';

export default function FavoritesPage() {
    const { favorites } = useFavorites();
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(favorites.map(id => fetchPhotoById(id))).then(res => {
            setPhotos(res);
            setLoading(false);
        });
    }, [favorites]);

    if (loading) return <Loader />;

    return (
        <>
            {/*  Заголовок страницы  */}
            <h1 className="page-title">Избранное</h1>

            {/*  Контент  */}
            {photos.length ? (
                <div className="grid">
                    {photos.map(p => (
                        <ImageCard
                            key={p.id}
                            id={p.id}
                            thumb={p.urls.small}
                            alt={p.alt_description || ''}
                        />
                    ))}
                </div>
            ) : (
                <p className="empty-state">Нет избранных.</p>
            )}
        </>
    );
}
