import React, { useState } from 'react';
import ResponseForm from '../components/ResponseForm';
import ResponseCard from '../components/ResponseCard';

const Home = () => {
    const [mockResponse, setMockResponse] = useState(null);

    const generateMockResponse = (response) => {
        setMockResponse(response);
    };

    return (
        <div className="home">
            <ResponseForm onGenerate={generateMockResponse} />
            {mockResponse && (
                <ResponseCard status={mockResponse.status} body={mockResponse.body} />
            )}
        </div>
    );
};

export default Home;