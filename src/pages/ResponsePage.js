import React, { useState } from 'react';
import ResponseForm from '../components/ResponseForm';
import ResponseCard from '../components/ResponseCard';

const ResponsePage = () => {
    const [mockResponses, setMockResponses] = useState([]);

    const generateMockResponse = (response) => {
        setMockResponses([...mockResponses, response]);
    };

    return (
        <div className="response-page">
            <ResponseForm onGenerate={generateMockResponse} />
            <div>
                {mockResponses.map((response, index) => (
                    <ResponseCard key={index} status={response.status} body={response.body} />
                ))}
            </div>
        </div>
    );
};

export default ResponsePage;