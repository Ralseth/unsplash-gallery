import React, {createContext, useContext, useState, useEffect} from 'react';

type FavoritesContextType = {
    favorites: string[];
    toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>(
        () => JSON.parse(localStorage.getItem('favorites') ?? '[]')  // ← читаем при инициализации
    );

    const toggleFavorite = (id: string) =>
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );

    /* Пишем в localStorage каждый раз, когда список меняется */
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};


export function useFavorites() {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error('useFavorites must be inside FavoritesProvider');
    return ctx;
}
