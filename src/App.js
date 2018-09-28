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
        currentScore: 0,
        planets: planets,
        unselectedPlanets: planets 
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
            // failure to select a new planet
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                planets: planets,
                unselectedPlanets: planets
            });
        }


        else {
            // success to select a new planet
            const newPlanets = this.state.unselectedPlanets.filter(item => item.world !== world);
            
            this.setState({ 
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
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
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.planets.map(planet => (
                        <PlanetCard
                            world={planet.world}
                            image={planet.image}
                            selectPlanet={this.selectPlanet} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

