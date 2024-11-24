import React, { useState, useEffect } from "react";
import "./setting.css";

const Setting = () => {
    const [theme, setTheme] = useState("light");
    const [notifications, setNotifications] = useState(true);
    const [username, setUsername] = useState("JohnDoe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState("");
    const [language, setLanguage] = useState("en");
    const [isSaving, setIsSaving] = useState(false);

    // On page load, check for saved theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.add(savedTheme); // Add the saved theme class
        } else {
            document.body.classList.add("light"); // Default theme
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.toggle("dark", newTheme === "dark");
        document.body.classList.toggle("light", newTheme === "light");
    };

    const toggleNotifications = () => {
        setNotifications(!notifications);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setAvatar(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSaveChanges = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            alert("Settings saved successfully!");
        }, 1500); // Simulate saving process
    };

    return (
        <div className={`settings-page ${theme}`}>
            <div className="settings-container">
                <h2 className="settings-title">User Settings</h2>

                {/* Profile Settings */}
                <div className="setting-item">
                    <h3 className="section-title">Profile Settings</h3>
                    <div className="input-group">
                        <label className="setting-label">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <label className="setting-label">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <label className="setting-label">Change Avatar</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="input-field"
                        />
                        {avatar && <img src={avatar} alt="Avatar Preview" className="avatar-preview" />}
                    </div>
                </div>

                {/* Theme Settings */}
                <div className="setting-item">
                    <h3 className="section-title">Appearance</h3>
                    <div className="setting-options">
                        <label className="setting-label">Theme</label>
                        <div className="theme-toggle">
                            <button
                                className={`theme-btn ${theme === "light" ? "active" : ""}`}
                                onClick={toggleTheme}
                            >
                                Light
                            </button>
                            <button
                                className={`theme-btn ${theme === "dark" ? "active" : ""}`}
                                onClick={toggleTheme}
                            >
                                Dark
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="setting-item">
                    <h3 className="section-title">Notifications</h3>
                    <div className="setting-options">
                        <label className="setting-label">Enable Notifications</label>
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={toggleNotifications}
                            className="checkbox"
                        />
                    </div>
                </div>

                {/* Password Change */}
                <div className="setting-item">
                    <h3 className="section-title">Change Password</h3>
                    <div className="input-group">
                        <label className="setting-label">New Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                </div>

                {/* Language Preferences */}
                <div className="setting-item">
                    <h3 className="section-title">Language Preferences</h3>
                    <div className="setting-options">
                        <label className="setting-label">Language</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="select-field"
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>

                {/* Save Button */}
                <div className="save-btn-container">
                    <button className="save-btn" onClick={handleSaveChanges} disabled={isSaving}>
                        {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setting;
