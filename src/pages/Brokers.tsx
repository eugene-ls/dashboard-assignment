import React, { useEffect, useState } from 'react';

const Brokers = () => {
    const [brokers, setBrokers] = useState([]);

    useEffect(() => {
        const fetchBrokers = async () => {
            const response = await fetch('/mock-data.json');
            const data = await response.json();
            setBrokers(data.brokers);
        };

        fetchBrokers();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Brokers</h1>
            <ul>
                {brokers.map((broker) => (
                    <li key={broker.id} className="border-b py-2">
                        <h2 className="text-xl">{broker.name}</h2>
                        <p>{broker.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Brokers;