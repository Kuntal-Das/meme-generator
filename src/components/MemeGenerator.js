import React from "react"

const MemeGenerator = (props) => (
    <main className="main main-grid">
        <div class="meme">
            <img src={props.imgUrl} className="meme-img" alt="Meme Img" />
            <label className="top-text">{props.topText}</label>
            <label className="bottom-text">{props.bottomText}</label>
        </div>
        <form className="meme-form">
            <textarea
                className="txt-input"
                name="topText"
                type="text"
                value={props.topText}
                onChange={props.handelChange}
            />
            <textarea
                className="txt-input"
                name="bottomText"
                type="text"
                value={props.bottomText}
                onChange={props.handelChange}
            />
            <button class="font-btn" type="button" onClick={props.getNewJoke}>Get Random Jokes</button>
            <button class="font-btn" type="button" onClick={props.getNewImage}>Get Another Meme Image</button>
        </form>
    </main>
)

export default MemeGenerator;