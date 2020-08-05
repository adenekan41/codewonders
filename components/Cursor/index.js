/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Cursor = () => {
  const cursor = useRef();
  const mouseMove = () => {
    const div = document.querySelectorAll('#cardHover');
    document.addEventListener('mousemove', (e) => {
      if (cursor && cursor.current) {
        cursor.current.setAttribute(
          'style',
          `top: ${e.pageY - 10}px; left: ${e.pageX -
            10}px; visibility: visible;`
        );
      }
      for (let i = 0; i < div.length; i++) {
        div[i].mouseIsOver = false;
        div[i].onmouseover = function() {
          cursor.current.classList.add('hovered');
        };
        div[i].onmouseout = function() {
          cursor.current.classList.remove('hovered');
        };
      }
    });
  };

  const click = () => {
    document.addEventListener('click', () => {
      if (cursor && cursor.current) {
        cursor.current.classList.add('expand');
      }
      setTimeout(() => {
        if (cursor && cursor.current) {
          return cursor.current.classList.remove('expand');
        }
      }, 500);
    });
  };

  useEffect(() => {
    mouseMove();
    click();
    return () => {
      click();
    };
  }, []);

  return (
    <CursorThumb>
      <div className="cursor d-none d-md-inline" ref={cursor} />
    </CursorThumb>
  );
};

const CursorThumb = styled.div`
  .cursor {
    width: 65px;
    height: 65px;
    visibility: hidden;
    border: 1px solid var(--gray);
    border-radius: 50%;
    position: absolute;
    z-index: 99999999999;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-animation: cursorAnim 0.5s infinite alternate;
    animation: cursorAnim 0.5s infinite alternate;
    pointer-events: none;
  }

  .cursor::after {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    background: var(--gray);
    border-radius: 1px;
    opacity: 0.5;
    top: 18px;
    left: 18px;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-animation: rotateAnim 2s infinite alternate;
    animation: rotateAnim 2s infinite alternate;
  }
  .cursor::before {
    content: unset !important;
  }
  @keyframes rotateAnim {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes cursorAnim {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.7);
    }
  }

  @keyframes cursorAnim2 {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.4);
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
    animation: cursorAnim3 0.5s forwards;
    border: 1px solid var(--gray);
  }
  .hovered {
    border: 1px solid var(--gray);
    width: 110px;
    background: #00000052;
    height: 110px;
    &::after {
      content: unset;
    }
    &::before {
      content: 'Open' !important;
      position: absolute;
      top: 50%;
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      left: 50%;
      color: #fff !important;
      transform: translate(-50%, -50%);
    }
  }
`;
export default Cursor;
