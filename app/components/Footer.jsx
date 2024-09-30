

import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";


const styles = {
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '10px'
  }
};

function Footer() {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap">
        <div className=" basis-1/3 m-5">
          <h3 className="font-extrabold text-4xl ml-3 uppercase mb-10">About Us</h3>
          <p className="px-3 mb-5 leading-5 font-bold">Jottify is a cutting-edge note-taking platform designed to simplify your life.
             Our mission is to provide a seamless and intuitive experience for individuals to capture, organize, and retain information.
            Founded on the principles of innovation and accessibility,
            Jottify aims to empower users to streamline their thoughts, ideas, and tasks efficiently.
            Our team is dedicated to continuously improving and refining the Jottify experience.
            Join the Jottify community today and discover a smarter way to note.</p>
        </div>
        <div className=" basis-1/3 m-5">
          <h3 className="font-bold mb-2 text-4xl uppercase ">Navigation</h3>
          <ul className="list-none p-0 m-0 font-bold">
            <li className="mb-2"><a href="#" className="text-white">Home</a></li>
            <li className="mb-2"><a href="#" className="text-white">Locations</a></li>
            <li className="mb-2"><a href="#" className="text-white">About</a></li>
          </ul>
        </div>
        <div className="footer-section basis-1/3 m-5">
          <h3 className="footer-title text-lg font-bold mb-2 uppercase">Connect with us</h3>
          <div style={styles.iconsContainer}>
          <FaFacebook size={30} />
            <FaXTwitter size={30} />
            <GrInstagram  size={30} />
          </div>
        </div>
      </div>
      <div className="copyright text-center mt-5">
        &copy; 2024 Jotter App. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
