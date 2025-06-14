import React, { useEffect, useState } from 'react';

const Submissions = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            const response = await fetch('/mock-data.json');
            const data = await response.json();
            setSubmissions(data.submissions);
        };

        fetchSubmissions();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Submissions</h1>
            <ul className="space-y-2">
                {submissions.map((submission) => (
                    <li key={submission.id} className="border p-4 rounded shadow">
                        <h2 className="font-semibold">{submission.title}</h2>
                        <p>{submission.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Submissions;