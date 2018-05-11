import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../images/profil.png';

const user = {
    image: require('../../images/profil.png')
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
                <Link to="/teacher" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Lärare</Link>
                <br/>
                <Link to="/createquiz" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Skapa quiz</Link>
            </li>
    </div>;

export const StudentSidebarContent =

      <div id={"Sidebar"}>
          <img src={user.image} className="Profile-img-side"/>
          <li className="bm-item-list">
              <Link to="/student" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Elev</Link>
              <br/>
              <Link to="/course" className="Link" style={{textDecoration: 'none'}} onClick={() => this.closeMenu()}>Kurs</Link>
          </li>
      </div>;
