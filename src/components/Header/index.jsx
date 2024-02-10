function Header() {
  return (
    <header className="Header p-10 flex justify-between">
      <h1 className="text-2xl">
        Book an Imam
      </h1>
      <nav>
        <a href="#" className="p-2 hover:text-indigo-500">Link 1</a>
        <a href="#" className="p-2 hover:text-indigo-500">Link 2</a>
        <a href="#" className="p-2 hover:text-indigo-500">Link 3</a>
      </nav>
    </header>
  );
}

export default Header;
