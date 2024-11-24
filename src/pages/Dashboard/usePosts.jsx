import { useState } from "react";

const usePosts = () => {
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
                {
                    id: "c1",
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
            ],
        },
        {
            id: 1,
            content:
                "JavaScript has a lot of quirks, but it's the language of the web. Always something new to learn.",
            author: {
                name: "Tom Wilson",
                email: "tomwilson@example.com",
                username: "tom_wilson",
                avatar: "https://github.com/tomwilson.png",
            },
            likes: {
                status: false,
                count: 5,
            },
            comments: [
                {
                    id: "c2",
                    content: "JavaScript is definitely an interesting language!",
                    author: {
                        name: "Alice Brown",
                        email: "alicebrown@example.com",
                        username: "alicebrown_92",
                        avatar: "https://github.com/alicebrown92.png",
                    },
                    time: "Tue Nov 21 2024 10:05:00 GMT+0530 (India Standard Time)",
                    likes: {
                        status: true,
                        count: 2,
                    },
                },
            ],
        },
        {
            id: 2,
            content:
                "Building APIs with Node.js has been a rewarding experience. I'm excited to create more with Express and MongoDB!",
            author: {
                name: "David Lee",
                email: "davidlee@example.com",
                username: "david_lee",
                avatar: "https://github.com/davidlee.png",
            },
            likes: {
                status: true,
                count: 12,
            },
            comments: [
                {
                    id: "c3",
                    content: "Node.js is the future of backend development!",
                    author: {
                        name: "Emma Green",
                        email: "emmagreen@example.com",
                        username: "emmagreen_77",
                        avatar: "https://github.com/emmagreen.png",
                    },
                    time: "Wed Nov 22 2024 13:20:00 GMT+0530 (India Standard Time)",
                    likes: {
                        status: false,
                        count: 4,
                    },
                },
            ],
        },
        {
            id: 3,
            content:
                "Exploring the power of TypeScript in large applications. It really helps with maintaining code quality and scalability.",
            author: {
                name: "Jessica Martin",
                email: "jessicamartin@example.com",
                username: "jessicama",
                avatar: "https://github.com/jessicama.png",
            },
            likes: {
                status: true,
                count: 7,
            },
            comments: [
                {
                    id: "c4",
                    content: "I love TypeScript for its static typing!",
                    author: {
                        name: "Liam Clark",
                        email: "liamclark@example.com",
                        username: "liamclark_56",
                        avatar: "https://github.com/liamclark.png",
                    },
                    time: "Thu Nov 23 2024 11:45:00 GMT+0530 (India Standard Time)",
                    likes: {
                        status: true,
                        count: 3,
                    },
                },
            ],
        },
        {
            id: 4,
            content:
                "I just started learning about front-end frameworks, and Vue.js is quickly becoming one of my favorites.",
            author: {
                name: "Olivia White",
                email: "oliviawhite@example.com",
                username: "oliviaw",
                avatar: "https://github.com/oliviaw.png",
            },
            likes: {
                status: false,
                count: 6,
            },
            comments: [
                {
                    id: "c5",
                    content: "Vue.js is definitely a great choice!",
                    author: {
                        name: "Noah Black",
                        email: "noahblack@example.com",
                        username: "noahblack_88",
                        avatar: "https://github.com/noahblack.png",
                    },
                    time: "Fri Nov 24 2024 09:00:00 GMT+0530 (India Standard Time)",
                    likes: {
                        status: true,
                        count: 2,
                    },
                },
            ],
        },
    ]);

    const likePost = (id) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        likes: {
                            status: !post.likes.status,
                            count: post.likes.status
                                ? post.likes.count - 1
                                : post.likes.count + 1,
                        },
                    }
                    : post
            )
        );
    };

    const submitComment = (id, comment) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                        ...post,
                        comments: [
                            ...post.comments,
                            {
                                id: new Date().toISOString(),
                                content: comment.content,
                                author: comment.author,
                                time: comment.time,
                                likes: { status: false, count: 0 },
                            },
                        ],
                    }
                    : post
            )
        );
    };

    const addPost = (content, author) => {
        const newPost = {
            id: posts.length,
            content,
            author,
            likes: { status: false, count: 0 },
            comments: [],
        };
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return { posts, likePost, submitComment, addPost };
};

export default usePosts;
