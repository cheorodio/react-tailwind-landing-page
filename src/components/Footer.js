import React from 'react';

function Footer() {
  return (
    <footer className="h-100 bg-footerBg flex items-center justify-center flex-col gap-12 pt-16 pb-24">
      <img src="images/logo.svg" alt="logo" className="w-44" />
      <div className="flex flex-col items-center gap-24">
        <ul className="flex gap-16 font-barlow text-lg text-lightCyan cursor-pointer">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
        <div className="flex gap-7">
          <a className="cursor-pointer">
            <img src="/images/icon-facebook.svg" alt="facebook icon" />
          </a>
          <a className="cursor-pointer">
            <img src="/images/icon-instagram.svg" alt="instagram icon" />
          </a>
          <a className="cursor-pointer">
            <img src="/images/icon-twitter.svg" alt="twitter icon" />
          </a>
          <a className="cursor-pointer">
            <img src="/images/icon-pinterest.svg" alt="pinterest icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
