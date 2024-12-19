import React, { useState } from 'react';

const ResponseForm = ({ onGenerate }) => {
    const [status, setStatus] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate({ status, body });
        setStatus('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Status Code</label>
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </div>
            <div>
                <label>Response Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button type="submit">Generate Response</button>
        </form>
    );
};

export default ResponseForm;