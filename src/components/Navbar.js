import React from 'react';

export default function Navbar() {
  const links = [
    { id: 1, title: 'About', link: '/' },
    { id: 2, title: 'Service', link: '/' },
    { id: 3, title: 'Projects', link: '/' },
  ];

  return (
    <nav className="flex text-justify justify-between items-center py-12 px-11 absolute z-10 w-full">
      <img className="w-44" src="/images/logo.svg" alt="logo" />
      <ul className="flex text-justify justify-between items-center gap-12 text-lg text-white cursor-pointer">
        {links.map(({ id, title, link }) => (
          <a href={link} key={`key-li-${id}`}>
            <li>{title}</li>
          </a>
        ))}
        <li>
          <a className="text-black py-4 px-9 bg-white rounded-3xl uppercase font-fraunces text-sm">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
