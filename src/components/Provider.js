import React, {Component} from "react";
export const Context = React.createContext();  //exporting context object

class MyProvider extends Component {
    state = {searchBar: "t"}
    render() {
        return (
            <Context.Provider value={
                {   state: this.state,
                    setSearchBar: (value) => this.setState({
                        searchBar: value })}}>
                {this.props.children}
                {console.log(this.state.searchBar)}
            </Context.Provider>)
    }
}

export default MyProvider