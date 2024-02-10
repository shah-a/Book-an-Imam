function Header() {
  return (
    <header className="Header py-10 flex justify-between items-center">
      <h1 className="text-2xl">
        Book an Imam
      </h1>
      <nav>
        <a href="#" className="p-2 hover:text-indigo-500">Khutbah</a>
        <a href="#" className="p-2 hover:text-indigo-500">Nikkah</a>
        <a href="#" className="p-2 hover:text-indigo-500">Consultation</a>
      </nav>
    </header>
  );
}

export default Header;
