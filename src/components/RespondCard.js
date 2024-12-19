import React from 'react';

const ResponseCard = ({ status, body }) => {
    return (
        <div className="response-card">
            <h3>Response</h3>
            <p><strong>Status Code:</strong> {status}</p>
            <p><strong>Body:</strong></p>
            <pre>{body}</pre>
        </div>
    );
};

export default ResponseCard;