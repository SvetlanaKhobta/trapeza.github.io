import React from "react";
import { useState, useEffect } from "react";
function ScrollToTopButton(){
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return() =>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if(scrollTop>0){
            setShowButton(true)
        }
        else{
            setShowButton(false)
        }
    }
    const handleScrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

    return(
        <div className="top">
            {showButton &&(
            <button onClick={handleScrollToTop} className="link back">Наверх</button>
            )}
        </div>
    )
}

export default ScrollToTopButton;