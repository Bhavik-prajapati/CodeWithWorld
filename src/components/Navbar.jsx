import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <h1 style={{ fontFamily: 'monospace' }}>
        CWW<i style={{ fontSize: '23px', paddingLeft: '5px' }} className="fa-brands fa-youtube"></i>
      </h1>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li style={{ padding: '5px 7px', background: 'red', color: 'white' }}>
          <a href="https://www.youtube.com/channel/UCiP_JoAO2aNwFXVX-nrTc-w">
            Subscribe<i style={{ padding: '0px 5px' }} className="fa-solid fa-bell"></i>
          </a>
        </li>
      </ul>

      <style>
        {`
        .scrolled {
          position: fixed;
          background-color: #003853; /* Set your desired background color */
          /* Add other styles for the fixed position */
        }
      `}
      </style>
    </header>
  );
};

export default Navbar;
