import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const user = {
    image: require('../../images/logo no shadow/H-black.png'),
};

export const LoggedOutSidebarContent =
    <div id={"Sidebar"}>
        <img src={user.image} className="Profile-img-side"/>
        <li className="bm-item-list">
            <Link to="/" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Home</Link>
            <br/>
            <Link to="/about" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Om oss</Link>
            <br/>
            <Link to="/contact" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kontakta oss</Link>
        </li>
    </div>;

export const TeacherSidebarContent =

    <div id={"Sidebar"}>
        <img src={user.image} className="Profile-img-side"/>
            <li className="bm-item-list">
                <Link to="/teacher" className="LinkT" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Lärare</Link>
                <br/>
                <Link to="/Exercises" className="LinkT" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Övningar</Link>
            </li>
    </div>;

export const StudentSidebarContent =

      <div id={"Sidebar"}>
          <img src={user.image} className="Profile-img-side"/>
          <li className="bm-item-list">
              <Link to="/student" className="LinkS" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Elev</Link>
              <br/>
              <Link to="/course" className="LinkS" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kurs</Link>
          </li>
      </div>;
