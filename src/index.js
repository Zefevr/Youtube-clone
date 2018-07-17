import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyD8k1GaWpECPdAfJa9A9-OydmIXVPXIKk4'


class App extends Component {
constructor(props){
    super(props);

    this.state = {videos: [] };

    YTSearch ({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos })
        //this.setState({videos:videos}) only when the property and the parameter are the same
    })
}

 render(){
    return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
        )
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));
