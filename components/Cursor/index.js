import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Cursor = () => {
  const cursor = useRef();
  const mouseMove = () => {
    document.addEventListener('mousemove', (e) => {
      if (cursor && cursor.current) {
        cursor.current.setAttribute(
          'style',
          `top: ${e.pageY - 10}px; left: ${e.pageX -
            10}px; visibility: visible;`
        );
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
  });
  return (
    <CursorThumb>
      <div className="cursor d-none d-md-inline" ref={cursor} />
    </CursorThumb>
  );
};

const CursorThumb = styled.div`
  .cursor {
    width: 70px;
    height: 70px;
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
    width: 12px;
    height: 12px;
    position: absolute;
    background: var(--gray);
    border-radius: 50%;
    opacity: 0.5;
    top: 18px;
    left: 18px;
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
`;
export default Cursor;
