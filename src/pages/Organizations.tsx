import React, { useEffect, useState } from 'react';

type Organization = {
  id: number;
  name: string;
  description: string;
};

const Organizations = () => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    useEffect(() => {
        const fetchOrganizations = async () => {
            const response = await fetch('/mock-data.json');
            const data = await response.json();
            setOrganizations(Array.isArray(data.organizations) ? data.organizations : []);
        };

        fetchOrganizations();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Organizations</h1>
            <ul className="space-y-2">
                {organizations.length === 0 && <li>Нет организаций</li>}
                {organizations.map((org) => (
                    <li key={org.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl">{org.name}</h2>
                        <p>{org.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Organizations;