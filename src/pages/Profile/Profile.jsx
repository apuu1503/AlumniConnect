import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("posts");

    // Separate data for posts and comments
    const [posts, setPosts] = useState([
        {
            id: 0,
            content:
                "Learning React has been a game changer for me! The ability to build dynamic user interfaces so easily is amazing.",
            author: {
                name: "Sarah Lee",
                email: "sarahlee@example.com",
                username: "sarah_lee",
                avatar: "https://github.com/sarahlee.png",
            },
            likes: {
                status: true,
                count: 8,
            },
            comments: [

            ],
        },
    ]);

    const [comments, setComments] = useState([
        {
            id: "656asdc6a",
            postId: 0, // Link comment to a specific post
            content: "Totally agree, React is awesome!",
            author: {
                name: "Mike Johnson",
                email: "mikejohnson@example.com",
                username: "mikej123",
                avatar: "https://github.com/mikej123.png",
            },
            time: "Mon Nov 20 2024 14:12:00 GMT+0530 (India Standard Time)",
            likes: {
                status: false,
                count: 3,
            },
        },
      
    ]);

    return (
        <div className="profile-container">
            {/* Profile Header */}
            <div className="profile-header">
                <img src={posts[0].author.avatar} alt="Profile" />
                <h1>{posts[0].author.name}</h1>
                <p>@{posts[0].author.username}</p>
                <p>{posts[0].author.email}</p>
            </div>

            {/* Tabs for Posts/Comments */}
            <div className="profile-tabs">
                <div
                    className={`profile-tab ${activeTab === "posts" ? "active" : ""}`}
                    onClick={() => setActiveTab("posts")}
                >
                    Posts
                </div>
                <div
                    className={`profile-tab ${activeTab === "comments" ? "active" : ""}`}
                    onClick={() => setActiveTab("comments")}
                >
                    Comments
                </div>
            </div>

            {/* Conditional Display of Posts/Comments */}
            {activeTab === "posts" && (
                <div className="posts-section">
                    {posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <div className="post-header">
                                <img src={post.author.avatar} alt="Author" />
                                <p>{post.author.name}</p>
                                <button className="like-button">
                                    Like {post.likes.count}
                                </button>
                            </div>
                            <p>{post.content}</p>
                            {/* Comments Section */}
                            <div className="comments">
                                {post.comments.map((comment) => (
                                    <div key={comment.id} className="comment-card">
                                        <img src={comment.author.avatar} alt="Comment Author" />
                                        <div>
                                            <p>
                                                <strong>{comment.author.name}</strong> -{" "}
                                                {new Date(comment.time).toLocaleString()}
                                            </p>
                                            <p>{comment.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "comments" && (
                <div className="comments-section">
                    {/* Display all comments */}
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="comment-card"
                            style={{
                                display: comment.postId === posts[0].id ? "flex" : "none", // Show comments related to the first post
                            }}
                        >
                            <img src={comment.author.avatar} alt="Comment Author" />
                            <div>
                                <p>
                                    <strong>{comment.author.name}</strong> -{" "}
                                    {new Date(comment.time).toLocaleString()}
                                </p>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
