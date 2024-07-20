
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: Footer component for Vision Coding Academy
 */

import { NavLink } from "react-router-dom"
import visionCodingIcon from "/vision-coding-icon.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function Footer() {

    return (
        <footer className="px-5 pt-10 md:py-20 max-w-[1000px] mx-auto">
            <div className="md:py-10 md:flex justify-between">
                <div className="md:w-[300px]">
                    <img src={visionCodingIcon} className="nav-element mx-auto md:mx-0" />
                    <NavLink to="/">
                        <div className="nav-element py-2 text-2xl text-center md:text-left">비전코딩</div>
                    </NavLink>
                </div>
                <div className="flex flex-col py-10 md:py-0 text-center md:text-left md:w-[300px]">
                    <h3 className="text-2xl pb-5">서비스</h3>
                    <NavLink to="/" className="nav-element py-2 text-lg">비전코딩교육</NavLink>
                    <NavLink to="/courses" className="nav-element py-2 text-lg">부트캠프</NavLink>
                    <NavLink to="/about" className="nav-element py-2 text-lg">커뮤니티</NavLink>
                    <NavLink to="/contact" className="nav-element py-2 text-lg">고객센터</NavLink>
                </div>
                <div className="py-10 md:py-0 text-center md:text-left md:w-[300px] md:pr-10">
                    <h3 className="text-2xl pb-5">㈜ 비전코딩 | 밴쿠버</h3>
                    <p className="py-2 text-lg">2885 Barnet Hwy, Coquitlam, BC V3B 1C1</p>
                    <p className="py-2 text-lg">2428 Haywood Ave, West Vancouver, BC V7V 1Y1</p>
                    <p className="py-2 text-lg">+1 604-900-3707</p>
                    <p className="py-2 text-lg">visioncodingca@gmail.com</p>
                </div>
                <div className="md:pl-5 py-10 md:py-0 text-center md:text-center md:w-[300px]">
                    <a href="https://www.instagram.com/vision.coding/" className="flex md:pb-3">
                        <FaInstagram size={50} />
                        <p className="text-lg pl-2">vision.coding</p>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61556365105748" className="flex md:py-3">
                        <ImFacebook size={50} />
                        <p className="text-lg pl-2">Facebook</p>
                    </a>
                    <a href="http://pf.kakao.com/_LaRxfxj" className="flex md:py-3">
                        <RiKakaoTalkFill size={50} />
                        <p className="text-lg pl-2">@visioncodingcqt</p>
                    </a>
                    <a href="http://wa.me/+16049003707" className="flex md:py-3">
                        <FaWhatsapp size={50} />
                        <p className="text-lg">6049003707</p>
                    </a>
                </div>
            </div>
            <div className="text-center pt-5">
                Copyright &copy; 2024 Vision Coding Academy. All rights reserved.
            </div>
        </footer>
    )
}