import React from 'react';



const GifItem = (image) => {
	return (
		<li>
			<img src={image.gif.url} alt='Gif img'/>
		</li>

		)
}
export default GifItem;