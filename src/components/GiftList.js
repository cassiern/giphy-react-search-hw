import React from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';

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
		<ListGroup color="grey">
		<ListGroupItem color="pink">
		{gifItems}
		</ListGroupItem>
		</ListGroup>
		</div>
		)
}
export default GifList;