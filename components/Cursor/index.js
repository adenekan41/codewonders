/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Cursor = () => {
  const cursor = useRef(null);
  const mouseMove = useCallback(
    (e) => {
      const elements = document.querySelectorAll('#cardHover');
      if (cursor.current) {
        cursor.current.setAttribute(
          'style',
          `top: ${e.pageY - 10}px; left: ${e.pageX -
            10}px; visibility: visible;`
        );
      }
      for (let i = 0; i < elements.length; i++) {
        elements[i].mouseIsOver = false;
        elements[i].onmouseover = () => {
          cursor.current.classList.add('hovered');
        };
        elements[i].onmouseout = () => {
          cursor.current.classList.remove('hovered');
        };
      }
    },
    [cursor.current]
  );

  const click = useCallback(() => {
    if (cursor.current) cursor.current.classList.add('expand');

    setTimeout(() => {
      if (cursor.current) return cursor.current.classList.remove('expand');
    }, 500);
  }, [cursor.current]);

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('click', click);
    return () => {
      document.removeEventListener('click', click);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, [click, mouseMove]);

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
    border: 2px solid var(--gray);
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
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      left: 50%;
      color: #fff !important;
      transform: translate(-50%, -50%);
    }
  }
`;
export default Cursor;
