import React from "react"
import {Segment, Form, Input} from "semantic-ui-react";


class SearchBar extends React.Component{

    state={
        searchTerm:'',
    }


    onInputChange=(event)=>{
        this.setState({searchTerm:event.target.value});


    }

    onSearchTermSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchTermSubmit(this.state.searchTerm);

    }
    render(){
        return (
            <Segment>
                <Form onSubmit={this.onSearchTermSubmit}>
                    <Input

                        onChange={this.onInputChange}
                        value={this.state.searchTerm}
                        label={"Video Search"}/>
                </Form>

            </Segment>
        )
    }
}

export default SearchBar