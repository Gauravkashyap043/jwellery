import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types/product';

interface FavoriteContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    setFavorites(currentFavorites => {
      if (!currentFavorites.find(item => item.id === product.id)) {
        return [...currentFavorites, product];
      }
      return currentFavorites;
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites(currentFavorites => 
      currentFavorites.filter(item => item.id !== productId)
    );
  };

  const isFavorite = (productId: number) => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
}; 