import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="Header mt-5 flex justify-between items-center">
      <h1 className="text-2xl">
        <a href="/">Book an Imam</a>
      </h1>
      <nav className="md:flex hidden">
        <a href="/?search=khutbah" className="p-2 hover:text-indigo-500">Khutbah</a>
        <a href="/?search=nikkah" className="p-2 hover:text-indigo-500">Nikkah</a>
        <a href="/?search=consultation" className="p-2 hover:text-indigo-500">Consultation</a>
      </nav>
      <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-12 right-3 bg-white text-black  shadow-md mt-2 py-2 md:hidden">
          <a href="/?search=khutbah" className="block p-2 hover:text-indigo-500">Khutbah</a>
          <a href="/?search=nikkah" className="block p-2 hover:text-indigo-500">Nikkah</a>
          <a href="/?search=consultation" className="block p-2 hover:text-indigo-500">Consultation</a>
        </div>
      )}
    </header>
  );
}

export default Header;
