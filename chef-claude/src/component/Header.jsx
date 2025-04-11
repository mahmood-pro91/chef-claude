import './Header.css';

import logo from '../assets/Untitled.png'



export default function Header() {
    return (
    <header className="main-header">
        <img className="logo" src={logo} alt="logo" />
        <h1>Chef Claude</h1>
    </header>
);
}