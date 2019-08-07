import React, { Component } from "react";
import Header from "./components/header";
// import NavBar from "./components/navbar";
import Wrapper from "./components/wrapper";
import Card from "./components/card";
import Footer from "./components/footer";
import './App.css';
import chars from "./chars.json";

class App extends Component {
  state = {
    chars: chars.sort(() => 0.5 - Math.random()),
    score: 0,
    topScore: 0,
    alreadyClicked: []
  }
  clickedCard = id => {
    if (this.state.alreadyClicked.includes(id)) {
      this.setState({ score: 0, alreadyClicked: [] })
      alert("You Lose!")
    } else {
      this.setState({ score: this.state.score + 1 });
      this.state.alreadyClicked.push(id)
    }
    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 })
    }
    if (this.state.score === this.state.chars.length) {
      this.setState({ score: 0, alreadyClicked: [] })
      alert("You Win!")
    }
    this.setState({ chars: chars.sort(() => 0.5 - Math.random()) })
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Wrapper>
          {this.state.chars.map(char => (
            <Card
              clickedCard={this.clickedCard}
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>);
  }
}

export default App;
