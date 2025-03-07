import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Posts.css';

const Posts = () => {
  // State to manage posts, including like functionality
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "ALL Scientific's New Repair Depot Opens",
      description: "AllScientific's New Repair Depot Opens",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "0 min read",
      views: 37,
      comments: 0,
      likes: 1,
      image: "/assets/images/post-one.webp",
      isLiked: false
    },
    {
      id: 2,
      title: "ALL Scientific's New Repair Depot Opens",
      description: "AllScientific's New Repair Depot Opens",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "1 min read",
      views: 47,
      comments: 4,
      likes: 1,
      image: "/assets/images/post-three.webp",
      isLiked: false
    },
    {
      id: 3,
      title: "ALL Scientific's New Office Opens",
      description: "ALL Scientific's New Office Opens",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "1 min read",
      views: 52,
      comments: 5,
      likes: 1,
      image: "/assets/images/post-four.webp",
      isLiked: false
    },
    {
      id: 4,
      title: "ALL Scientific's New Trucks are on the Road",
      description: "Expanding our fleet to better serve our customers",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "2 min read",
      views: 52,
      comments: 6,
      likes: 1,
      image: "/assets/images/post-two.webp",
      isLiked: false
    },
    {
      id: 5,
      title: "The Lifeline of Blood Banks: Precision Refrigeration for Safe Storage",
      description: "Blood Bank Every drop of blood stored represents a lifeline for patients in critical need. Whether for trauma care, life-saving ",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "2 min read",
      views: 1,
      comments: 0,
      likes: 1,
      image: "/assets/images/post-five.webp",
      isLiked: false
    },
    {
      id: 6,
      title: "MRI Downtime: Strategies for Reliable Medical Imaging Operations",
      description: "MRI facilities rely on precise temperature control to ensure accurate imaging, patient safety, and operational efficiency.",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "2 min read",
      views: 52,
      comments: 6,
      likes: 1,
      image: "/assets/images/post-six.webp",
      isLiked: false
    },
    {
      id: 7,
      title: "Advancements in MRI Technology: Transforming Patient Care",
      description: "Historical Perspective: The Evolution of MRI Technology Since its clinical adoption in the early 1980s, magnetic resonance imaging (MRI)",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "2 min read",
      views: 52,
      comments: 6,
      likes: 1,
      image: "/assets/images/post-seven.webp",
      isLiked: false
    },
    {
      id: 8,
      title: "The Key to Lab Success: Preventive Maintenance for Ultra Low Temperature",
      description: "Ultra low temperature freezers are critical to scientific research, preserving irreplaceable biological samples, reagents",
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "2 min read",
      views: 52,
      comments: 6,
      likes: 1,
      image: "/assets/images/post-eight.webp",
      isLiked: false
    },
    {
      id: 9,
      title: "Ultra Low Temperature Freezer Calibration and Its Importance",
      description: "The Science Behind Calibration Calibration is the process of verifying an instrument's measurements against a known, traceable standard. ", 
      author: "Steven Gottfried",
      date: "May 12, 2024",
      readTime: "2 min read",
      views: 52,
      comments: 6,
      likes: 1,
      image: "/assets/images/post-nine.webp",
      isLiked: false
    },
  ]);

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
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible + moved down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible state when in viewport
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delayed appearance for smooth animation
            viewport={{ once: true }} // Ensures animation happens only once
          >
            {/* Post Image */}
            <img src={post.image} alt={post.title} className="post-image" />
            
            {/* Post Content */}
            <div className="post-content">
              {/* Post Header with Author Info */}
              <div className="post-header">
                <div className="author-info">
                  {/* Avatar with First Letter of Author's Name */}
                  <div className="author-avatar">
                    {post.author.charAt(0)}
                  </div>
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
                  {/* Views Count */}
                  <div className="stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>{post.views}</span>
                  </div>
                  {/* Comments Count */}
                  <div className="stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
                {/* Like Button */}
                <button 
                  className={`like-button ${post.isLiked ? 'active' : ''}`}
                  onClick={() => handleLike(post.id)}
                >
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
