import React from 'react';
import './ButtonTop.css';

export default function ButtonTop() {
    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <button className="btn-top" onClick={scrollUp}>
            ↑
        </button>
    );
}
