import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.cursor {
    width: 70px;
    height: 70px;
    border: 1px solid var(--gray);
    border-radius: 50%;
    position: absolute;
    z-index:99999999999;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-animation: cursorAnim .5s infinite alternate;
    animation: cursorAnim .5s infinite alternate;
    pointer-events: none;
}

.cursor::after {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    background: var(--gray);
    border-radius: 50%;
    opacity: .5;
    top: 18px;
    left: 18px;
}

@keyframes cursorAnim {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.7);
    }
}

@keyframes cursorAnim2 {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.4);
    }
}

@keyframes cursorAnim3 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(3);
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}

.expand {
    animation: cursorAnim3 .5s forwards;
    border: 1px solid var(--gray);
}

`
const Cursor = () => {
    const cursor = useRef();
    const [clicked, setClicked] = useState(false)
    const mouseMove = () => {
        document.addEventListener('mousemove', e => {
            if(cursor && cursor.current){
                cursor.current.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
            }
        })  
    }
    const click = () => {
        document.addEventListener('click', () => {
            // cursor.current.classList.add("expand");
            setClicked(true)
            setTimeout(() => {
                setClicked(false)
            }, 500)
        })
    }
    useEffect(() => {
        mouseMove()
        click()
    },[clicked])
    return  (
        <Wrapper>
            <div className={ `${ clicked ? 'expand' : '' } cursor d-none d-md-inline`} ref={cursor}></div>
        </Wrapper>
    )
}

export default Cursor