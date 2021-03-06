import React from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class App extends React.Component {
    constructor() {
        super()
        this.jokesApiUrl = "https://official-joke-api.appspot.com/jokes/random"
        this.memeImgApiUrl = "https://api.imgflip.com/get_memes"

        this.state = {
            isLoading: true,
            topText: "",
            bottomText: "",
            imgUrl: "",
            imgs: [],
        }
    }

    getRandomJoke = async () => {
        const res = await fetch(this.jokesApiUrl);
        const data = await res.json();

        return data;
    }

    getMemeImgs = async () => {
        const res = await fetch(this.memeImgApiUrl);
        const { data } = await res.json();

        return data.memes;
    }

    setRandomImg = () => {
        const randIndx = Math.floor(Math.random() * this.state.imgs.length)
        this.setState({ imgUrl: this.state.imgs[randIndx].url })
    }

    handelChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    setRandomJoke = () => {
        this.getRandomJoke()
            .then(joke => {
                this.setState({
                    topText: joke.setup,
                    bottomText: joke.punchline,
                });
            });
    }

    componentDidMount = () => {
        Promise.all([
            this.getRandomJoke().catch(err => console.error(err)),
            this.getMemeImgs().catch(err => console.error(err))
        ]).then(([jokeData, imgUrls]) => {
            this.setState({
                topText: jokeData.setup,
                bottomText: jokeData.punchline,
                imgUrl: imgUrls[Math.floor(Math.random() * imgUrls.length)].url,
                imgs: imgUrls,
            });
            this.setState({ isLoading: false });
        });
    }

    render = () => {
        return (
            <div style={{
                minHeight: "75vh", position: "relative"
            }}>
                <Header />
                {
                    (this.state.isLoading) ?
                        <Loading />
                        :
                        <MemeGenerator
                            {...this.state}
                            getNewImage={this.setRandomImg}
                            getNewJoke={this.setRandomJoke}
                            handelChange={this.handelChange}
                        />
                }
            </div >
        )
    }
}

export default App
