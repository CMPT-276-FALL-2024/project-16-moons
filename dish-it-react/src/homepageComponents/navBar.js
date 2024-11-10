import React from "react";
import "../index.css";

const NavBar = () => {
    return (
    <header className="navigation-bar">
        <a href="#">
            <img
            src="/website/images/Dish-It-Smaller.png"
            className="image"
            alt="logo of Dish-It"
        /></a>
        <nav className="navbar">
            <a href="#">HOME</a>
            <a href="#howitworks">HOW IT WORKS</a>
            <a href="#about">ABOUT</a>
            <a
            href="https://docs.google.com/document/d/1JZCWgFncoqhTWbnXguZtalruUfB7CJaEjLOR9sbGqdo/edit?usp=sharing"
            target="_blank"
            >DOCUMENTATION</a
            >
            <a href="#contactus">CONTACT US</a>
        </nav>
    </header> 
    )
}

export default NavBar;