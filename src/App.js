import React, { Component } from "react";
import "./styles.css";
import InfiniteScroll from "react-infinite-scroll-component";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchBox/search-box.components";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
      champions: []
    };
  }

  componentDidMount() {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json"
    )
      .then(response => response.json())
      .then(users => {
        var champions = Object.values(users.data);
        this.setState({ champions });
      })
      .catch(error => console.log(error));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { champions, searchField } = this.state;
    const championsFiltered = champions.filter(champion =>
      champion.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <InfiniteScroll dataLength={this.state.champions.length}>
          <SearchBox
            type="search"
            placeholder="Search the Champion"
            handleChange={this.handleChange}
          />
          <CardList champions={championsFiltered} />
        </InfiniteScroll>
      </div>
    );
  }
}
