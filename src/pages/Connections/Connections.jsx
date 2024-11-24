import React, { useState } from "react";
import "./connections.css";

const Connections = () => {
    // Sample data for user connections
    const [connections, setConnections] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            username: "johndoe123",
            avatar: "https://github.com/johndoe123.png",
        },
        {
            id: 2,
            name: "Emily Smith",
            email: "emilysmith@example.com",
            username: "emilysmith456",
            avatar: "https://github.com/emilysmith456.png", // Test with a valid URL or placeholder
        },
        {
            id: 3,
            name: "Michael Johnson",
            email: "michaeljohnson@example.com",
            username: "michaelj789",
            avatar: "https://github.com/michaelj789.png", // Test with a valid URL or placeholder
        },
    ]);

    return (
        <div className="connections-container">
            {/* Header */}
            <div className="connections-header">
                <h1>My Connections</h1>
                <p>View and manage your connections</p>
            </div>

            {/* Grid layout for displaying connections */}
            <div className="connections-grid">
                {connections.map((connection) => (
                    <div key={connection.id} className="connection-card">
                        <div className="connection-avatar-container">
                            <img src={connection.avatar} alt={connection.name} className="connection-avatar" />
                        </div>
                        <div className="connection-info">
                            <h3>{connection.name}</h3>
                            <p>@{connection.username}</p>
                            <p>{connection.email}</p>
                        </div>
                        <button className="message-button">Message</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Connections;
