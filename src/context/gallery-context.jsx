import React, { useContext, useState } from 'react';

export const GalleryContext = React.createContext();

const GalleryProvider = ({children}) => {
    const [photos, setPhotos] = useState(undefined)
    

    return (
        <GalleryContext.Provider value={{ photos, setPhotos }}>
            {children}
        </GalleryContext.Provider>
    )
}
export default GalleryProvider;
