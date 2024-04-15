import React, { useEffect, useContext } from 'react'
import { GalleryContext } from '../context/gallery-context';

const Gallery = () => {
	const context = useContext(GalleryContext)
	
	if (!context) {
		return <div>Error: El contexto no está definido.</div>
	} 
		
	const {photos, setPhotos} = context
	
	

	useEffect(() => {
		
		if(photos == undefined) {
			console.log("cargando...")
			const fetchPhotos = async () => {
				try {
					const response = await fetch('../../public/photos.json')
					const data = await response.json()
					setPhotos(data.photos)
				} catch (error) {
					console.error('Error fetching photos:', error)
				}
			};
	
			fetchPhotos();
		}
	}, [])

	const updateLiked = (i) => {
		const updatedPhotos = [...photos]
		updatedPhotos[i].liked = !updatedPhotos[i].liked
		setPhotos(updatedPhotos)
	  };

	return (
		<div className="gallery grid-columns-5 p-3">
			{photos && photos.map((photo, index) => (
				<div key={index} className="card-photo">
					<button onClick={() => updateLiked(index)}>
						{photo.liked ? <img src='src\assets\icons\heart-filled.svg' /> : <img src='src\assets\icons\heart.svg'/>}
					</button>
					<img src={photo.src.original} alt={photo.alt} />
				</div>
			))}
		</div>
	);
};

export default Gallery
