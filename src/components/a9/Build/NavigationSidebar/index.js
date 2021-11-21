import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSidebar = ({
  active = 'explore'
}) => {
  return (
    <>
      <div className="list-group">
        <Link className="list-group-item" to="/">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link className={`list-group-item ${active === 'home' ? 'active' : ''}`} to="/a7/twitter/home">
          <i className="fas fa-home"></i>
          <span className="d-none d-xl-inline"> Home</span>
        </Link>
        <Link className={`list-group-item ${active === 'explore' ? 'active' : ''}`} to="/a7/twitter/explore">
          <i className="fas fa-hashtag"></i>
          <span className="d-none d-xl-inline"> Explore</span>
        </Link>
        <Link className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} to="/a7/twitter/notifications">
          <i className="fas fa-bell"></i>
          <span className="d-none d-xl-inline"> Notifications</span>
        </Link>
        <Link className={`list-group-item ${active === 'messages' ? 'active' : ''}`} to="/a7/twitter/messages">
          <i className="fas fa-envelope"></i>
          <span className="d-none d-xl-inline"> Messages</span>
        </Link>
        <Link className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} to="/a7/twitter/bookmarks">
          <i className="fas fa-bookmark"></i>
          <span className="d-none d-xl-inline"> Bookmarks</span>
        </Link>
        <Link className={`list-group-item ${active === 'lists' ? 'active' : ''}`} to="/a7/twitter/lists">
          <i className="fas fa-list"></i>
          <span className="d-none d-xl-inline"> Lists</span>
        </Link>
        <Link className={`list-group-item ${active === 'profile' ? 'active' : ''}`} to="/a7/twitter/profile">
          <i className="fas fa-user"></i>
          <span className="d-none d-xl-inline"> Profile</span>
        </Link>
        <Link className={`list-group-item ${active === 'more' ? 'active' : ''}`} to="/a7/twitter/more">
          <i className="fas fa-ellipsis-h"></i>
          <span className="d-none d-xl-inline"> More</span>
        </Link>
      </div>
      <div className="d-grid mt-2">
        <Link to="tweet.html"
          className="btn btn-primary btn-block rounded-pill">
          Tweet
        </Link>
      </div>
    </>
  )
};

export default NavigationSidebar;
