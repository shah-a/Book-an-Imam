function Header() {
  return (
    <header className="Header p-10 flex justify-between">
      <h1 className="text-2xl">
        Book an Imam
      </h1>
      <div>
        <a href="#" className="p-2 hover:text-indigo-500">Link 1</a>
        <a href="#" className="p-2 hover:text-indigo-500">Link 2</a>
        <a href="#" className="p-2 hover:text-indigo-500">Link 3</a>
      </div>
    </header>
    // <header className="shadow w-full">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a href="/" className="flex title-font font-medium items-center hover:text-gray-900 mb-4 md:mb-0">
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12l-4 4m0 0l4 4m-4-4h14m-5 4v4m-2-2h4"></path>
    //       </svg>
    //       <span className="ml-3 text-xl">Book an Imam</span>
    //     </a>
    //     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    //       <a href="#services" className="mr-5 hover:text-gray-900">Services</a>
    //       <a href="#about" className="mr-5 hover:text-gray-900">About Us</a>
    //       <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>
    //     </nav>
    //     <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">Book Now
    //       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </header>
  );
}

export default Header;
