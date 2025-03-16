import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Posts.css';
import { postsData } from '../constants/PostsData.js';

const Posts = () => {
  // State to manage posts, including like functionality
  const [posts, setPosts] = useState(postsData);

  // Function to handle like/unlike functionality
  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked, // Toggle like status
          likes: post.isLiked ? post.likes - 1 : post.likes + 1 // Increase or decrease like count
        };
      }
      return post;
    }));
  };

  return (
    <div className="posts-container">
      <h1 className="posts-title">The Posts</h1>
      <div className="posts-grid">
        {posts.map((post, index) => (
          <motion.article 
            key={post.id} 
            className="post-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Post Image */}
            <img src={post.image} alt={post.title} className="post-image" />
            
            {/* Post Content */}
            <div className="post-content">
              {/* Post Header with Author Info */}
              <div className="post-header">
                <div className="author-info">
                  <div className="author-avatar">{post.author.charAt(0)}</div>
                  <div className="author-details">
                    <div className="author-name">{post.author}</div>
                    <div className="post-meta">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Title and Description */}
              <h2 className="post-title">{post.title}</h2>
              <p className="post-description">{post.description}</p>

              {/* Post Footer with Views, Comments, and Like Button */}
              <div className="post-footer">
                <div className="post-stats">
                  <div className="stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{post.views}</span>
                  </div>
                  <div className="stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
                <button className={`like-button ${post.isLiked ? 'active' : ''}`} onClick={() => handleLike(post.id)}>
                  <svg viewBox="0 0 24 24" fill={post.isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>{post.likes}</span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
