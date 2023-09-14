import React, { useState, useRef, useEffect } from 'react';

const HoverCard = ({ children }) => {
    const [hoverCardHeight, setHoverCardHeight] = useState(0);
    const hoverCardRef = useRef(null);

    const handleHover = () => {
        if (hoverCardRef.current) {
            const childrenHeight = hoverCardRef.current.clientHeight;
            setHoverCardHeight(childrenHeight);
        }
    };

    const handleHoverExit = () => {
        setHoverCardHeight(0);
    };

    useEffect(() => {
        window.addEventListener('resize', handleHoverExit);

        return () => {
            window.removeEventListener('resize', handleHoverExit);
        };
    }, []);

    return (
        <div className="hover-card relative inline-block" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
            {children}
            <div
                ref={hoverCardRef}
                className="hover-content absolute top-1/2 left-1/2 bg-blue-400 text-white p-2 rounded z-10"
                style={{ display: hoverCardHeight > 0 ? 'block' : 'none', minHeight: `${hoverCardHeight}px` }}
            >
                Hover card content
            </div>
        </div>
    );
};

export default HoverCard;
