import React from 'react';
// import GifItem from './GifItem';

const GifList = (props) => {
	console.log('GifList props: ', props)
	const gifItems = props.gifs.map((images)=> {
		return (<li key={images.id}>
			<img src={images.images.downsized.url} alt='Gif img'/>
		</li>
		)
	});

	return (
		<div>
		<ul>
		{gifItems}
		</ul>
		</div>
		)
}
export default GifList;