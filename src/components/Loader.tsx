import React from 'react';
import './Loader.css';

export default function Loader() {
    return (
        <div className="loader">
            {/* простой «кольцевой» прелоадер */}
            <svg viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx="25" cy="25" r="20"
                    fill="none" strokeWidth="4"
                />
            </svg>
        </div>
    );
}
