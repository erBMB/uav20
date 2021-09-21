import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  ul {
    margin: 0 auto;
    width: 100%;
    //text-align: center;
    margin-bottom: 2em;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: #F5F5F5	;
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color:black;
      outline: none;
    }
    .active {
      //color: var(--white);
      text-decoration: underline;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 1446px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
     display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
     // background-color: var(--deep-dark);
      background-color: white;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        font-family: 'Lobster';
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

const HorizontalLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            marginTop:25,
        }}
    />
);

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
      <p style={{fontFamily:'Lobster', fontSize:20, color:'black', textAlign:'left',marginRight:'5em',marginLeft:'0.69em',width:'490px'}}>Universitatea "Aurel Vlaicu" din Arad</p>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'} >
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
       
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           Pagina de start
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comitet"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           Comitet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sponsori"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           Sponsori și parteneri
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diplome"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           Diplome și Galerie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/invitedSpeakers"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           Inivați speciali
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sectiuni"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           Secțiuni
          </NavLink>
        </li>
      </ul>
      </div>
      <HorizontalLine/>
    </NavStyles>
  );
}
