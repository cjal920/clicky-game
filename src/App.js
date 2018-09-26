import React, { Component } from 'react';
import './App.css';
import planets from './planets.json'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Title from './components/Title'
import PlanetCard from './components/PlanetCard' 

class App extends Component {
    state = { 
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        planets: planets,
        unselectedPlanets: planets
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectPlanet = world => {
        const findPlanet = this.state.unselectedPlanets.find(item => item.world === world);

        if(findPlanet === undefined) {
            // failure to select a new dog
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                planets: planets,
                unselectedPlanets: planets
            });
        }
        else {
            // success to select a new dog
            const newPlanets = this.state.unselectedPlanets.filter(item => item.world !== world);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                planets: planets,
                unselectedPlanets: newPlanets 
            });
        }

        this.shuffleArray(planets);
    };

    render() {
        return (
            <Wrapper>
                <Nav
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.planets.map(planet => (
                        <PlanetCard
                            world={planet.world}
                            image={planet.image}
                            selectPlanet={this.selectPlanet} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

