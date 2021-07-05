import React from 'react'
import {Container} from "semantic-ui-react";

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    onSearchTermSubmit = async (searchTerm) => {

        const response = await youtube.get('/search', {
                params: {
                    q: searchTerm
                }
            }
        );

        this.setState({videos: response.data.items});

        this.setState({selectedVideo:response.data.items[0]})
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }

    componentDidMount() {
        this.onSearchTermSubmit('java')
    }

    render() {
        return (
            <Container>
                <SearchBar onSearchTermSubmit={this.onSearchTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                <VideoDetail
                    video={this.state.selectedVideo} /></div>
                        <div className="five wide column">
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}/></div></div>
                </div>
            </Container>
        )
    }
}

export default App