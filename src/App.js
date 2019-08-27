import React, {Component} from 'react';
import './App.css';
import GifList from './components/GiftList';


class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

getGifs = async(e) => {
    try{
      const gifs = await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=ZGkoSXdxLnWORsrAGNxMzwn7vSsmmSi6&limit=20`);
      const gifsJson = await gifs.json();
      console.log(gifsJson, 'gifsJson')
      //return gifsJson;

      this.setState(
      {
        gifs: await gifsJson.data
      });
    } catch(err) {
      console.log('getGifs err: ', err);
      return err;
    }
}


// getData(){
//   this.getGifs()
//     .then((giphyData) => {
//       console.log('data: ', giphyData);
//       this.setState({
//         gifs: giphyData.data
//       })
//     })
// }

handleChange = (e) =>{
  this.setState({
    [e.target.name] : e.target.value
  })
  console.log(e.target.value)
  //this.getData();  
}


render() {
  console.log(this.state.gifs, 'this.state.gifs in the render');
  console.log(this.state.search, 'this.state.search')


        return (
            <div>
            <div className="search">
                <input type="text" name="search" placeholder="Search..." onChange={this.handleChange} />
                <input type="submit" value="submit" onClick={this.getGifs} /> 
            </div>
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }

}

export default App;
