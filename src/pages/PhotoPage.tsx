import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhotoById } from '../api/unsplash';
import Loader from '../components/Loader';

export default function PhotoPage() {
    const { id } = useParams<{ id: string }>();
    const [photo, setPhoto] = useState<any>(null);

    useEffect(() => {
        if (id) {
            fetchPhotoById(id).then(data => setPhoto(data));
        }
    }, [id]);

    if (!photo) return <Loader />;

    return photo?(
        <div className="photo-page">
            <img className="photo-img" src={photo.urls.regular} alt={photo.alt_description}/>
            <div className="photo-meta">
                <h2>{photo.user.name}</h2>
                {photo.description||photo.alt_description}
            </div>
            <a className="photo-download" href={photo.links.download} target="_blank" rel="noreferrer">
                ↓ Download
            </a>
        </div>
    ):<Loader/>;
}
