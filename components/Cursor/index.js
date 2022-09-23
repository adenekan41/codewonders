/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import useIsMounted from '../Utils/useIsMounted';

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const isMounted = useIsMounted();
  const [mouseActive, setMouseActive] = useState(false);

  const delay = 8;
  const _x = useRef(0);
  const _y = useRef(0);
  const endX = useRef(process.browser ? window.innerWidth / 2 : 0);
  const endY = useRef(process.browser ? window.innerHeight / 2 : 0);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const requestRef = useRef(null);

  const toggleCursorVisibility = useCallback(() => {
    if (dot?.current && dotOutline?.current)
      if (cursorVisible.current) {
        dot.current.style.opacity = '1';
        dotOutline.current.style.opacity = '1';
      } else {
        dot.current.style.opacity = '0';
        dotOutline.current.style.opacity = '0';
      }
  }, []);

  const toggleCursorSize = useCallback(() => {
    if (dot?.current && dotOutline?.current)
      if (cursorEnlarged.current) {
        setMouseActive(true);
      } else {
        setMouseActive(false);
      }
  }, []);

  const mouseOverEvent = useCallback(
    (e) => {
      if (e.target.id === 'cardHover') {
        cursorEnlarged.current = true;
        toggleCursorSize();
      }
    },
    [toggleCursorSize]
  );

  const mouseOutEvent = useCallback(
    (e) => {
      if (e.target.id === 'cardHover') {
        cursorEnlarged.current = false;
        toggleCursorSize();
      }
    },
    [toggleCursorSize]
  );

  const mouseEnterEvent = useCallback(() => {
    cursorEnlarged.current = true;
    toggleCursorVisibility();
  }, [toggleCursorVisibility]);

  const mouseLeaveEvent = useCallback(() => {
    cursorEnlarged.current = false;
    toggleCursorVisibility();
  }, [toggleCursorVisibility]);

  const mouseMoveEvent = useCallback(
    (e) => {
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;
      if (dot?.current) {
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
      }
    },
    [toggleCursorVisibility]
  );

  const animateDotOutline = useCallback(() => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    if (dotOutline?.current) {
      dotOutline.current.style.top = _y.current + 'px';
      dotOutline.current.style.left = _x.current + 'px';
    }

    requestRef.current = requestAnimationFrame(animateDotOutline);
  }, [endX, endY]);

  useEffect(() => {
    const requestRefs = requestRef?.current;

    if (isMounted()) {
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseenter', mouseEnterEvent);
      document.addEventListener('mouseleave', mouseLeaveEvent);
      document.addEventListener('mouseover', mouseOverEvent);
      document.addEventListener('mouseout', mouseOutEvent);

      animateDotOutline();
    }
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);
      document.removeEventListener('mouseover', mouseOverEvent);
      document.removeEventListener('mouseout', mouseOutEvent);

      cancelAnimationFrame(requestRefs);
    };
  }, [
    isMounted,
    mouseMoveEvent,
    mouseEnterEvent,
    mouseLeaveEvent,
    mouseOverEvent,
    mouseOutEvent,
    animateDotOutline,
  ]);

  return (
    <CursorStyle cursorActive={mouseActive}>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </CursorStyle>
  );
};

const CursorStyle = styled.div`
  @media (min-width: 989px) {
    .cursor-dot,
    .cursor-dot-outline {
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      opacity: 0;
      z-index: 9222;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;
    }

    .cursor-dot {
      width: 8px;
      height: 8px;
      box-shadow: inset 0 0 0px 0.5px var(--light-gray);
      background-color: var(--gray);
    }

    .cursor-dot-outline {
      width: 65px;
      height: 65px;
      border: 1px solid var(--gray);
      box-shadow: inset 0 0 0px 0.5px var(--light-gray);
    }

    ${({ cursorActive }) =>
      cursorActive
        ? css`
            .cursor-dot {
              transform: translate(-50%, -50%) scale(0.75);
              &::before {
                content: 'Open';
                position: absolute;
                top: 50%;
                font-weight: 500;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                left: 50%;
                color: var(--bg);
                background: var(--cw);
                border-radius: 50px;
                padding: 2px 8px;
                transform: translate(-50%, -50%);
              }
            }
            .cursor-dot-outline {
              box-shadow: none;
              transform: translate(-50%, -50%) scale(1.7);
            }
          `
        : css`
            .cursor-dot {
              transform: translate(-50%, -50%) scale(1);
            }
            .cursor-dot-outline {
              transform: translate(-50%, -50%) scale(1);
            }
          `}
  }
`;
export default Cursor;
