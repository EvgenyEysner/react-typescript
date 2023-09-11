import React from "react";
// useHistory() is replaced by useNavigate().
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    const navHandler = () => {
        navigate("/")
    }
    return (
        <>
            <h1>About</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed non facere
                ullam eos beatae aliquid. Quidem inventore aspernatur eaque fugit.
            </p>
            <button className="btn" onDoubleClick={navHandler}>Todo's</button>
        </>
    );
};
