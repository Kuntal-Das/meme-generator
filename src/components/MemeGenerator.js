import React from "react"

const MemeGenerator = (props) => (
    <main className="main main-grid">
        <img src="#" className="meme-img" alt="Meme Img" />
        <form className="meme-form">
            <input type="text" />
            <input type="text" />
            <button>Get Random Jokes</button>
            <button>Get Another Meme Image</button>
        </form>
    </main>
)

export default MemeGenerator;