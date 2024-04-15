import React, { useEffect, useContext } from 'react'
import { GalleryContext } from '../context/gallery-context';

const FavoritesGallery = () => {
	const context = useContext(GalleryContext)
	
	if (!context) {
		return <div>Error: El contexto no está definido.</div>
	} 
		
	const {photos, setPhotos} = context

	const updateLiked = (i) => {
		const updatedPhotos = [...photos]
		updatedPhotos[i].liked = !updatedPhotos[i].liked
		setPhotos(updatedPhotos)
	};

	return (
		<div className="gallery grid-columns-5 p-3">
			{photos.map((photo, index) => (
				photo.liked &&
				<div key={index} className="card-photo">
					<button onClick={() => updateLiked(index)}>
						<img src='src\assets\icons\heart-filled.svg' />
					</button>
					<img src={photo.src.original} alt={photo.alt} />
				</div>
			))}
		</div>
	);
};

export default FavoritesGallery
