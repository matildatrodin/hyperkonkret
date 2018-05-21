import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/side.css';

const user = {
    image: require('../../images/logo no shadow/H-black.png'),
};

export const LoggedOutSidebarContent =
    <div>
        <img src={user.image} className="Profile-img-side"/>
        <hr className="hr-style"/>
        <li className="bm-item-list">
            <Link to="/" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Hem</Link>
            <Link to="/about" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Om oss</Link>
        </li>
    </div>;

export const TeacherSidebarContent =

    <div>
        <Link to="/" className="H-logo" onClick={() => this.closeMenu()}><img src={user.image} className="Profile-img-side"/></Link>
        <hr className="hr-style"/>
        <li className="bm-item-list">
            <Link to="/teacher" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Profil</Link>
            <Link to="/subjects" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Ämnen</Link>
        </li>
    </div>;

export const StudentSidebarContent =

      <div>
          <Link to="/" className="H-logo" onClick={() => this.closeMenu()}><img src={user.image} className="Profile-img-side"/></Link>
          <hr className="hr-style"/>
          <li className="bm-item-list">
              <Link to="/student" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Profil</Link>
              <Link to="/course" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Ämnen</Link>
          </li>
      </div>;
