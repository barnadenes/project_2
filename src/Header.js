import img from './img/face.jpg';

export default function Header() {
    return (
        <header>
        <img src={img} alt="logo"></img>
        <h3>Meme Generator</h3>
        <h4>React Course - Project 3</h4>
        </header>
      );
}