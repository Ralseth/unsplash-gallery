import React, {useCallback, useState} from 'react';
import { searchPhotos, Photo } from '../api/unsplash';
import './HeroSearch.css';


type Props = { onResults: (photos: Photo[]) => void };

export default function HeroSearch({ onResults }: Props) {
    const [query, setQuery] = useState('');
    const doSearch = useCallback(() => {
        if (!query.trim()) return;
        searchPhotos(query).then(onResults);
    }, [query, onResults]);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) return;
        doSearch();
    };

    return (
        <section className="hero">
            <form className="search-box" onSubmit={submit}>
                <input
                    value={query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setQuery(e.target.value)
                    }
                    placeholder="Поиск"
                />
                <button type="submit">🔍</button>
            </form>
        </section>
    );
}
