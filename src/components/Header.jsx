
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Header component for Vision Coding Academy
 */

import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import visionCodingIcon from "/yellow1.png";

export default function Header() {
    const [navVisible, setNavVisible] = useState(window.innerWidth > 700? true : false);

    function slideToggle() {
        setNavVisible(!navVisible);
    };

    return (
        <header className="md:flex justify-between bg-black text-white sticky z-50 top-0">
            <div className="flex justify-between md:block px-2">
                <div className="flex">
                    <img src={visionCodingIcon} className="w-[60px]" alt="Vision Coding Icon" />
                    <NavLink to="/">
                        <div className="nav-element py-5 text-lg md:text-2xl">비전코딩</div>
                    </NavLink>
                </div>
                <button id="hamburger-menu" className="text-3xl md:hidden" onClick={slideToggle}>&#x2630;</button>
            </div>
            {navVisible && <nav id="main-nav">
                <ul className="md:flex">
                    <li
                        className="px-5 py-2 md:py-5 text-center rounded-md transition ease-in-out duration-300  md:hidden">
                        <NavLink to="/" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>Home</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/about" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>비전코딩교육</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/courses" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>부트캠프</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/schedule" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>비전코딩 소개</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/gallery" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>커뮤니티</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/contact" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>고객센터</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/login" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>로그인</NavLink>
                    </li>
                    <li
                        className="px-5 py-2 text-center md:hidden rounded-md transition ease-in-out duration-300  md:text-2xl">
                        <NavLink to="/signup" onClick={() => window.innerWidth < 700 && setNavVisible(false)}>회원가입</NavLink>
                    </li>
                </ul>
            </nav>}
            <div className="flex">
                <NavLink to="/login"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    로그인
                </NavLink>
                <NavLink to="/signup"
                    className="nav-element hidden px-5 py-2 md:py-5 text-center md:block rounded-md transition ease-in-out duration-300 md:text-2xl">
                    회원가입
                </NavLink>
            </div>
        </header>
    );
}
