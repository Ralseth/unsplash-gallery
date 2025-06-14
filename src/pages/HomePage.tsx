import { useEffect, useState } from 'react';
import HeroSearch from '../components/HeroSearch';
import ButtonTop from '../components/ButtonTop';
import ImageCard from '../components/ImageCard';
import { Photo, fetchRandomPhotos } from '../api/unsplash';

export default function HomePage() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const cached = sessionStorage.getItem('random8');
        if (cached) {
            setPhotos(JSON.parse(cached));
            return;
        }
        fetchRandomPhotos(8).then(list => {
            setPhotos(list);
            sessionStorage.setItem('random8', JSON.stringify(list));
        });
    }, []);


    return (
        <>
            <HeroSearch onResults={setPhotos} />

            <div className="grid">
                {photos.map((p) => (
                    <ImageCard
                        key={p.id}
                        id={p.id}
                        thumb={p.urls.small}
                        alt={p.alt_description || ''}
                    />
                ))}
            </div>

            <ButtonTop />
        </>
    );
}
