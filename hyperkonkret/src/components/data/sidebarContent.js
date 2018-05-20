import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const user = {
    image: require('../../images/logo no shadow/H-black.png'),
};

export const LoggedOutSidebarContent =
    <div id={"Sidebar"}>
        <img src={user.image} className="Profile-img-side"/>
        <br/>
        <br/>
        <hr className="hr-style"></hr>
        <br/>
        <li className="bm-item-list">
            <Link to="/" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Hem</Link>
            <br/>
            <br/>
            <br/>
            <Link to="/about" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Om oss</Link>
        </li>
    </div>;

export const TeacherSidebarContent =

    <div id={"Sidebar"}>
        <Link to="/" className="H-logo" onClick={() => this.closeMenu()}><img src={user.image} className="Profile-img-side"/></Link>
        <br/>
        <br/>
        <hr className="hr-style"></hr>
        <br/>
        <li className="bm-item-list">
                <Link to="/teacher" className="LinkT" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Profil</Link>
                <br/>
                <br/>
                <br/>
                <Link to="/subjects" className="LinkT" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Ämnen</Link>
            </li>
    </div>;

export const StudentSidebarContent =

      <div id={"Sidebar"}>
          <Link to="/" className="H-logo" onClick={() => this.closeMenu()}><img src={user.image} className="Profile-img-side"/></Link>
          <br/>
          <br/>
          <hr className="hr-style"></hr>
          <br/>
          <li className="bm-item-list">
              <Link to="/student" className="LinkS" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Profil</Link>
              <br/>
              <br/>
              <br/>
              <Link to="/course" className="LinkS" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Ämnen</Link>
          </li>
      </div>;
