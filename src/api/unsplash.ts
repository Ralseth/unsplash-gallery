const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

export interface Photo {
    id: string;
    alt_description: string | null;
    urls: {
        small: string;
        regular: string;
    };
    user?: { name: string };
    links?: { download: string };
}


export async function fetchRandomPhotos(count = 8) {
    const res = await fetch(`https://api.unsplash.com/photos/random?count=${count}`, {
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` }
    });
    return res.json();
}

export async function searchPhotos(query: string) {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` }
    });
    const data = await res.json();
    return data.results;
}

export async function fetchPhotoById(id: string) {
    const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` }
    });
    return res.json();
}
