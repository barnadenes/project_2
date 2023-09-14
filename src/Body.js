import img from './img/face.jpg'

export default function Body(props) {
    return (
        <div className="main-body">
            <form>
                <input className="input_1" placeholder="upperTxt"></input>
                <input className="input_2" placeholder="lowerTxt"></input>
                <button className="btn">Generate Meme</button>
            </form>
                <div className='meme'>
                    <img className="meme-img" src={img}></img>
                    <h1 className="top">top text</h1>
                    <h1 className="bottom">bottom text</h1>
                </div>
        </div>
    )
}