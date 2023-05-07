import React from 'react';
import './Feedback.css';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className="Section_class">{title}</h2>
            {children}
        </section>
    );
};

export default Section;