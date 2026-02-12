import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="container section" style={{ textAlign: 'center' }}>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                Return Home
            </Link>
        </div>
    );
};

export default NotFoundPage;