import React, { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";

import { fetchData } from "../../main";
import { useNavigate } from "react-router-dom";

import '../../App.css'

const Profile = () => {

    const navigate = useNavigate();

    const [content, setContent] = useState('');

    const onChange = (e) => setContent(e.target.value);


    const { user } = useContext(UserContext);
    const userid = user.username
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Post value is ", content, userid)
        fetchData("/post/create",
            {
                userid,
                content,
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    navigate("/profile");
                    console.log(data)
                }
            })
            .catch((error) => {
                console.log(error)
            })

    };

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch the list of posts from the API
        fetchData('/post/posts', {
            userid
        }, "POST")
            .then(data => {
                console.log("data", data);
                // Update the state with the fetched posts
                setPosts(data.result);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log("posts for FE is", posts)

    return (
        <div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '10px', marginBottom: '10px', borderRadius: '4px' }} className="username">Username: <span id="username-placeholder" >{user.username}</span></div>

            <div className="register-form-container">

                <form onSubmit={handleSubmit}>
                    <h2>Submit Post</h2>
                    <div className="form-group">
                        <label htmlFor="password">Content</label>
                        <input
                            type="text"
                            id="content"
                            name="content"
                            className="form-control"
                            placeholder="Enter content"
                            onChange={onChange}
                            value={content}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Post</button>
                </form>
            </div>
            <br></br>
            <div className="posts">
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Posts</h3>
                {posts ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {posts.map(post => (
                            <li key={post._id} style={{ backgroundColor: '#f5f5f5', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>{post.content}</li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ fontStyle: 'italic', color: '#777' }}>Loading posts...</p>
                )}
            </div>

        </div>
    );
};

export default Profile;