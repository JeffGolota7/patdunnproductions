import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navRef = useRef();
  const desktopLogo = useRef();
  const mobileLogo = useRef();
  const close = useRef();
  const ham = useRef();

  const showMobileNav = () => {
    navRef.current.classList.toggle("mobile");
    close.current.classList.toggle("mobileOpen");
  };

  return (
    <nav ref={navRef} className="navbar-container">
      <Link to="/" ref={desktopLogo} className="logo-link">
        <svg
          className="navbar-logo"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 343.98 253.45"
        >
          <g id="Layer_1-2">
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m23.97,149.71c-3.15,8.33-6.53,17.1-9.23,25.2-.9,2.02-1.35,4.05-2.92,6.3-.9,1.13-2.02,2.7-3.37,3.15-1.35.67-2.7.22-3.37-1.58-.67-.67-.67-2.02-1.58-2.47-3.83-4.73-3.83-10.13-3.15-15.75,1.35-8.1,4.95-11.93,6.53-20.93.23-2.25,7.03-19.66,6.13-21.91-1.1-3.74-.69-7.91-.68-11.68,0-.16.08-.31.21-.4,2.41-1.71,4.78-2.85,6.09-5.48,2.25-2.02,2.47-5.18,3.37-8.1,7.88-21.15,9.62-31.64,21.09-51.89.67-1.35,1.35-2.93,2.7-5.4-1.8.23-2.48.23-3.6.67-7.88,2.48-15.52,5.63-22.95,10.13-1.35.9-3.15,1.8-5.18,2.25-1.12.9-3.37-.22-3.6-1.8-1.13-9.23-3.15-8.78,5.18-15.75,15.08-11.03,32.18-18.68,50.85-22.5,13.05-3.37,26.33-3.6,39.6,0,5.85,1.13,11.47,3.6,16.88,6.53,2.02,1.58,4.27,3.37,5.85,5.63,2.02,2.02,4.27,4.5,5.18,7.2,1.8,6.75,3.37,13.27,2.7,20.93-1.58,16.43-.4,13.05-10.53,25.2-11.25,13.73-24.52,25.65-40.5,33.08-15.3,6.75-31.05,12.15-48.15,12.6-1.13,0-1.58.23-3.15.23-.9,3.37-9.5,23.4-10.4,26.55ZM117.5,47.9c-1.21-3.88-3.76-7.2-7.2-9.35-1.65-1.03-3.44-2.04-5.33-2.92-7.88-4.28-15.97-5.18-23.85-5.18-6.08-.23-11.7-.23-17.55,1.12-2.93,9.68-6.07,18.23-8.33,26.33-6.3,20.02-6.03,22.5-12.1,42.75-.45,1.8-1.12,3.15-.22,4.95.22,0,.22.22.67.22,1.13-.22,2.02-.22,2.92-.9,21.15-6.75,39.6-19.35,56.7-35.1l12.56-12.15c2.25-2.18,3.08-5.44,2.14-8.43l-.43-1.36Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m167.13,77.55c4.65-4.35,8.7-8.25,13.21-11.56.15-.45.9-.45,1.35-.6,2.1,2.4,2.4,4.95.45,7.5-.9,1.65-1.95,3.6-3,4.95-5.1,7.5-10.05,15.61-13.36,24.01-1.35,3.9-2.7,7.8-2.7,12.01,0,.15,0,.6-.15.9-.45.45-1.05,1.05-1.65,1.05-.45,0-1.5-.45-1.65-.9-.9-2.85-1.35-5.25-1.2-8.1.15-3.45,1.05-6.75,2.1-10.2.3-.75.45-1.35.6-2.1-.9-.6-1.35.15-1.65.45-3.3,3.3-6.9,6-10.5,9-2.4,1.8-5.25,3.3-8.1,5.25-1.8,1.2-4.2,1.5-6.3,1.35-3-.6-4.5-1.65-5.4-4.65-.15-.75-.15-1.5-.3-2.25-2.4-4.65-.9-9.15.75-13.51,1.05-1.8,2.1-3.45,3.6-5.1,4.2-6.15,9.6-10.96,16.51-14.86,2.25-1.65,4.95-2.7,7.65-3h1.2c5.4,0,6.45,1.65,7.35,6.3.75,1.8.75,3.45.9,5.1-1.05,0-2.1.15-3.15,0-3.6-.9-6.75.3-9.9,1.8-7.65,4.5-13.51,10.35-17.41,18.31-.3.3-.3,1.05-.6,1.5,2.4.3,4.35-.45,5.85-1.5,3.45-2.55,6.6-4.35,9.6-6.75,4.95-4.05,9-8.25,13.36-12.61.75-.3,1.05-1.05,2.25-.75.15-.45.15-.9.3-1.05Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m186.74,57.93c-3.9.15-7.95.9-12.01-.15-.3-1.05-.3-1.95-.6-2.7-.6-2.1.15-3.6,1.65-4.65,1.65-.75,3.15-1.35,4.5-2.1,4.5-.9,8.7-1.5,13.21-2.4,4.5-.6,8.7-1.05,13.36-1.8.9-1.5,1.95-2.7,2.7-4.05,7.2-10.65,17.11-30.76,27.01-39.17.75-.3,1.35-.9,2.1-.9.3,0,1.35.3,1.5.75.75,3.15,1.95,6.15,0,9.3-5.55,11.86-12.16,25.36-16.36,33.02.9,0,1.65.15,2.55.15,3.75,0,7.65-.15,11.41,0,2.25.3,5.1.45,7.35,1.05,2.55.6,4.05,3,3.75,5.25-.3,1.35-1.2,2.55-3.15,2.7-2.85.6-6.3.6-9.3,1.05-6.45.6-12.61,1.2-18.91,1.8-8.7,13.66-16.51,32.11-16.51,48.47,0,1.8-.15,3.6,1.5,4.95.45.75.9,2.25,1.05,3.3.6,1.5-.3,3.45-2.55,3.9-2.1.45-3.3-.45-4.5-2.4-12.31-19.36-4.8-38.27,3-55.68-4.8-.75-8.85.3-12.76.3Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m41.72,232.65c2.76,0,6.05-.17,8.81-.35,1.55,0,3.11,0,4.15-1.04,0-11.06,3.63-21.25,6.39-31.96,4.32-16.93,9.67-33.34,16.59-49.58,1.38-3.11,2.76-6.56,3.97-9.5.52-1.38.86-2.25,1.73-4.15-6.22.86-11.23,3.11-16.58,5.53-12.09,5.01-23.15,12.27-28.51,18.31,0,1.21.35,2.42.35,3.8.17,1.38-.69,2.25-1.73,2.25-2.59.35-4.84-.69-5.53-3.63-.35-.69-.52-1.38-.69-1.9-1.04-2.76-1.04-5.01.69-7.43,1.9-2.42,3.63-4.66,5.7-7.08,8.98-8.81,19.52-15.37,30.92-20.56,8.12-3.46,16.76-6.22,25.22-8.12,6.91-1.21,13.82-1.38,20.21-1.38s12.44.52,18.66,2.07c7.43,1.9,14.34,5.01,20.21,10.54,3.11,2.94,5.36,6.91,7.08,10.88,4.66,14.34,2.76,27.47-3.8,40.43-5.87,12.44-14.68,22.29-24.53,31.79-16.93,16.41-36.62,28.68-58.39,37.32-6.91,2.07-13.99,4.15-21.08,4.49-4.32.17-8.64.17-12.96-1.9-1.73-1.04-3.63-2.07-5.36-3.63-1.21-.52-1.9-1.55-2.25-2.94-1.04-4.15-2.24-7.95-2.59-12.44,0-1.55.52-2.94,1.21-4.32,1.9-3.11,4.84-5.36,7.6-7.26.52-.17,1.21-.35,1.73-.35,1.9-.35,3.8.86,3.8,2.25,0,1.73-.69,3.8-1.04,5.36-.17,1.55-1.04,2.59-1.73,3.97.69.17,1.21.52,1.73.52Zm27.47-4.49c11.23-3.63,21.25-8.29,30.58-13.99,16.58-9.85,30.58-22.63,41.98-38.7,3.28-4.84,6.05-10.02,7.95-15.55,2.42-5.87.86-10.71-2.94-15.03-1.55-1.38-3.11-2.76-4.32-3.8-3.28-2.59-6.74-3.97-10.36-5.36-7.6-2.76-15.72-3.28-23.67-3.11-2.94,0-5.7-.17-8.81.52-11.4,31.96-22.98,63.23-34.03,96.4,1.9-1.04,2.76-1.21,3.63-1.38Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m181.18,157.87c2.16-1.22,4.46-2.16,6.22-3.65,5.28-3.11,9.6-7.17,14.2-11.36,1.62-.95,3.11-2.16,4.19-3.52,1.89-1.08,3.25-2.71,4.46-4.46,1.76-3.11,4.46-5.68,6.9-7.98.95-.68,1.62-1.22,2.98-.54.14,1.76,1.76,3.11,1.76,5.41,0,1.35-.14,2.71-1.08,4.19-2.43,3.92-5.14,8.12-7.57,12.17-3.25,6.09-6.22,12.44-7.71,19.34,0,.27-.13.54-.27,1.08-.41.41-.95,1.08-1.89.81-.27-.27-1.22-.54-1.35-1.22-.95-2.43-1.49-5.68-.95-8.39.27-1.76.41-3.52.81-5.82-.81.68-1.35,1.08-1.89,1.76-3.11,2.16-5.82,4.73-8.79,6.76-2.7,1.76-5.14,3.65-7.85,5.28-2.16,1.22-4.73,1.89-7.3,1.62-3.25-.27-5.14-1.49-6.09-4.19-.81-2.16-1.76-3.92-2.03-6.09-.68-3.25-.68-6.63.27-10.14.95-2.84,2.43-6.09,4.19-8.79,2.98-4.87,6.09-9.06,10.28-12.58,1.22-.68,2.16-1.35,4.06-1.08,1.62,2.44,2.16,5.14.27,7.57-1.35,2.43-2.7,4.33-4.06,6.63-2.7,5.14-5.14,10.42-6.63,15.83-.13.54-.13,1.22-.27,1.76,1.89.68,3.65.14,5.14-.41Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m244.33,128.73c-.53,1.16-1.37,2.64-2.01,3.81-2.22,4.12-4.55,8.35-6.87,12.69-.95,2.33-1.8,4.86-2.75,7.08-.11.32,0,.63,0,1.06,1.48-.53,2.33-1.48,3.49-2.22,3.91-4.02,8.14-7.93,12.16-11.84,5.6-5.6,11.52-10.57,18.29-14.8,2.85-1.69,5.71-3.28,8.78-4.44.85-.42,1.8-.63,2.64-.63,1.27-.11,2.43.21,2.64,1.8.11.21.11.53.21.63,1.37,1.16,1.37,2.64,1.59,4.02.85,2.85.42,5.5-.95,7.82-1.69,3.81-3.81,7.3-5.5,11.21-2.22,4.97-8.35,11.42-4.55,16.6.42,1.59-.53,2.64-2.11,3.07-7.61-2.33-8.67-13.43-5.81-19.98,1.48-3.28,3.17-6.13,5.08-8.99,1.37-2.11,2.75-4.12,4.12-6.24-.42-.63-.85-.32-1.37-.21-4.02,1.69-7.4,4.33-10.68,7.19-4.02,3.38-7.51,7.19-11,10.78-4.12,4.34-8.14,8.88-12.26,13.22-1.48,1.37-3.28,2.75-4.97,3.81-.85.85-2.43,1.27-3.81,1.27-1.27-.32-2.22-.85-2.64-2.01-.42-1.27-1.16-2.64-1.9-3.81-.95-1.16-1.16-2.75-1.06-4.12.11-2.64.53-4.86,1.27-7.08,1.69-4.55,3.91-8.67,6.56-12.58,2.33-3.91,4.97-7.72,7.93-11,.85-.53,1.37-1.37,2.22-1.9,3.17-1.27,2.43.21,3.49,2.96.64,1.16.21,2.01-.21,2.85Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m305.38,124.97c-.53,1.16-1.37,2.64-2.01,3.81-2.22,4.12-4.55,8.35-6.87,12.69-.95,2.33-1.8,4.86-2.75,7.08-.11.32,0,.63,0,1.06,1.48-.53,2.33-1.48,3.49-2.22,3.91-4.02,8.14-7.93,12.16-11.84,5.6-5.6,11.52-10.57,18.29-14.8,2.85-1.69,5.71-3.28,8.78-4.44.85-.42,1.8-.63,2.64-.63,1.27-.11,2.43.21,2.64,1.8.11.21.11.53.21.63,1.37,1.16,1.37,2.64,1.59,4.02.85,2.85.42,5.5-.95,7.82-1.69,3.81-3.81,7.3-5.5,11.21-2.22,4.97-8.35,11.42-4.55,16.6.42,1.59-.53,2.64-2.11,3.07-7.61-2.33-8.67-13.43-5.81-19.98,1.48-3.28,3.17-6.13,5.08-8.99,1.37-2.11,2.75-4.12,4.12-6.24-.42-.63-.85-.32-1.37-.21-4.02,1.69-7.4,4.33-10.68,7.19-4.02,3.38-7.51,7.19-11,10.78-4.12,4.34-8.14,8.88-12.26,13.22-1.48,1.37-3.28,2.75-4.97,3.81-.85.85-2.43,1.27-3.81,1.27-1.27-.32-2.22-.85-2.64-2.01-.42-1.27-1.16-2.64-1.9-3.81-.95-1.16-1.16-2.75-1.06-4.12.11-2.64.53-4.86,1.27-7.08,1.69-4.55,3.91-8.67,6.56-12.58,2.33-3.91,4.97-7.72,7.93-11,.85-.53,1.37-1.37,2.22-1.9,3.17-1.27,2.43.21,3.49,2.96.64,1.16.21,2.01-.21,2.85Z"
            />
          </g>
        </svg>
      </Link>
      <Link
        to="/"
        ref={mobileLogo}
        onClick={() => {
          if (navRef.current.classList.contains("mobile")) {
            navRef.current.classList.toggle("mobile");
          }
        }}
        className="logo-link-mobile-navbar"
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 161.95 244.28"
        >
          <g id="Layer_1-2">
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m23.97,140.54c-3.15,8.33-6.53,17.1-9.23,25.2-.9,2.02-1.35,4.05-2.92,6.3-.9,1.13-2.02,2.7-3.37,3.15-1.35.67-2.7.22-3.37-1.58-.67-.67-.67-2.02-1.58-2.47-3.83-4.73-3.83-10.13-3.15-15.75,1.35-8.1,4.95-11.93,6.53-20.93.23-2.25,7.03-19.66,6.13-21.91-1.1-3.74-.69-7.91-.68-11.68,0-.16.08-.31.21-.4,2.41-1.71,4.78-2.85,6.09-5.48,2.25-2.02,2.47-5.18,3.37-8.1,7.88-21.15,9.62-31.64,21.09-51.89.67-1.35,1.35-2.93,2.7-5.4-1.8.23-2.48.23-3.6.67-7.88,2.48-15.52,5.63-22.95,10.13-1.35.9-3.15,1.8-5.18,2.25-1.12.9-3.37-.22-3.6-1.8-1.13-9.23-3.15-8.78,5.18-15.75C30.72,14.09,47.82,6.44,66.49,2.62c13.05-3.37,26.33-3.6,39.6,0,5.85,1.13,11.47,3.6,16.88,6.53,2.02,1.58,4.27,3.37,5.85,5.63,2.02,2.02,4.27,4.5,5.18,7.2,1.8,6.75,3.37,13.27,2.7,20.93-1.58,16.43-.4,13.05-10.53,25.2-11.25,13.73-24.52,25.65-40.5,33.08-15.3,6.75-31.05,12.15-48.15,12.6-1.13,0-1.58.23-3.15.23-.9,3.37-9.5,23.4-10.4,26.55ZM117.5,38.74c-1.21-3.88-3.76-7.2-7.2-9.35-1.65-1.03-3.44-2.04-5.33-2.92-7.88-4.28-15.97-5.18-23.85-5.18-6.08-.23-11.7-.23-17.55,1.12-2.93,9.68-6.07,18.23-8.33,26.33-6.3,20.02-6.03,22.5-12.1,42.75-.45,1.8-1.12,3.15-.22,4.95.22,0,.22.22.67.22,1.13-.22,2.02-.22,2.92-.9,21.15-6.75,39.6-19.35,56.7-35.1l12.56-12.15c2.25-2.18,3.08-5.44,2.14-8.43l-.43-1.36Z"
            />
            <path
              fill="#3dc96b"
              className="cls-1"
              d="m41.72,223.48c2.76,0,6.05-.17,8.81-.35,1.55,0,3.11,0,4.15-1.04,0-11.06,3.63-21.25,6.39-31.96,4.32-16.93,9.67-33.34,16.59-49.58,1.38-3.11,2.76-6.56,3.97-9.5.52-1.38.86-2.25,1.73-4.15-6.22.86-11.23,3.11-16.58,5.53-12.09,5.01-23.15,12.27-28.51,18.31,0,1.21.35,2.42.35,3.8.17,1.38-.69,2.25-1.73,2.25-2.59.35-4.84-.69-5.53-3.63-.35-.69-.52-1.38-.69-1.9-1.04-2.76-1.04-5.01.69-7.43,1.9-2.42,3.63-4.66,5.7-7.08,8.98-8.81,19.52-15.37,30.92-20.56,8.12-3.46,16.76-6.22,25.22-8.12,6.91-1.21,13.82-1.38,20.21-1.38s12.44.52,18.66,2.07c7.43,1.9,14.34,5.01,20.21,10.54,3.11,2.94,5.36,6.91,7.08,10.88,4.66,14.34,2.76,27.47-3.8,40.43-5.87,12.44-14.68,22.29-24.53,31.79-16.93,16.41-36.62,28.68-58.39,37.32-6.91,2.07-13.99,4.15-21.08,4.49-4.32.17-8.64.17-12.96-1.9-1.73-1.04-3.63-2.07-5.36-3.63-1.21-.52-1.9-1.55-2.25-2.94-1.04-4.15-2.24-7.95-2.59-12.44,0-1.55.52-2.94,1.21-4.32,1.9-3.11,4.84-5.36,7.6-7.26.52-.17,1.21-.35,1.73-.35,1.9-.35,3.8.86,3.8,2.25,0,1.73-.69,3.8-1.04,5.36-.17,1.55-1.04,2.59-1.73,3.97.69.17,1.21.52,1.73.52Zm27.47-4.49c11.23-3.63,21.25-8.29,30.58-13.99,16.58-9.85,30.58-22.63,41.98-38.7,3.28-4.84,6.05-10.02,7.95-15.55,2.42-5.87.86-10.71-2.94-15.03-1.55-1.38-3.11-2.76-4.32-3.8-3.28-2.59-6.74-3.97-10.36-5.36-7.6-2.76-15.72-3.28-23.67-3.11-2.94,0-5.7-.17-8.81.52-11.4,31.96-22.98,63.23-34.03,96.4,1.9-1.04,2.76-1.21,3.63-1.38Z"
            />
          </g>
        </svg>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link
            className="navbar-link"
            to="/gallery"
            onClick={() => {
              if (navRef && navRef.current.classList.contains("mobile")) {
                navRef.current.classList.toggle("mobile");
              }
            }}
          >
            My Work
          </Link>
        </li>
        <li>
          <Link
            className="navbar-link"
            to="/about"
            onClick={() => {
              if (
                navRef &&
                navRef.current &&
                navRef.current.classList.contains("mobile")
              ) {
                navRef.current.classList.toggle("mobile");
              }
            }}
          >
            About Me
          </Link>
        </li>
        <li>
          <a className="navbar-link" href="mailto:dunnp2019@gmail.com">
            Contact Me
          </a>
        </li>

        <div onClick={showMobileNav} ref={close} className="close">
          <span className="line closeline"></span>
          <span className="line closeline"></span>
        </div>
      </ul>
      <div className="hamburger" ref={ham} onClick={showMobileNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
}
