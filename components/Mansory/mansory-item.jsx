import React from 'react'
import styled from 'styled-components';
const get_random = function (list) {
    return list[Math.floor((Math.random()*list.length))];
} 
const MansoryItemStyle = styled.div`
    margin: 0 0 1.5em;
    position: relative;
    /* min-height:400px; */
    cursor: pointer;
    border-radius: 9px;
    object-fit: cover;
    background-image: url(${props => props.item.imageUrl});
    background-size: cover;
    background-color: #f5f5f5;
    background-position:center;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 1.4rem 2rem;
    display:flex;
    align-items:flex-end;
    border-radius: 9px;
    break-inside: avoid;
 
    &:before{
        content: "";
        pointer-events: none;
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: -1;
        background: radial-gradient(circle at center center, white 10%, whitesmoke 11%, whitesmoke 100%);
    }
    &:after {
        content: "";
        pointer-events: none;
        position: absolute;
        z-index: 1;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.3;
        background: linear-gradient(191deg,rgba(0,0,0,0.1) 20%,rgba(0, 0, 0, 0.76) 100%);
    }
    &:hover{
        &:after {
            opacity: 1;
        }
        div{
            z-index: 999;
            transform: none;
            opacity: 1;
        }
        
    }
    
    h3{
        color: #fff;
        font-size: 31px;
        font-weight: 800;
    }
    p{
        color: #d5d5d5 !important;
        font-size: 15px;
    }
    div{
        opacity: 0;
        transform: translateY(10%);
        transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
        
        /* &:hover {
            transform: none;
            opacity: 1;
        } */
    }

`
const MansoryItem = ({item, index}) => {
    return (
        <a href={item.link} target="_blank" style={{color: 'inherit',
            textDecoration: 'none'}}>
            <MansoryItemStyle {...{item}} style={{height: get_random(['440px', '560px', '350px'])}}>
                <div>
                    <h3>{item.title}</h3> 
                    <p>{item.description}</p>
                </div>
            </MansoryItemStyle>
        </a>
    )
}

export default MansoryItem