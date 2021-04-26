import React from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class App extends React.Component {
    constructor() {
        super()
        this.jokesApiUrl = "https://official-joke-api.appspot.com/jokes/random"

        this.state = {
            imgUrl: "",
            topText: "",
            bottomText: "",
        }
    }

    getRandomJoke = async () => {
        const res = await fetch(this.jokesApiUrl);
        const data = await res.json();

        return data;
    }

    componentDidMount() {
        const joke = this.getRandomJoke()
        console.log(joke)
    }

    render = () => (
        <div className="app">
            <Header />
            <MemeGenerator {...this.state} />
        </div>
    );
}

export default App
