

const NavBar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/profile/:userId", name: "Profile" }
      ];
    return (
        <nav>
           <ul className="md:flex">
           {
             routes.map(route => <li className="mr-7" key={route.id}> <a href={route.path}>{route.name}</a></li>)
           }

           </ul>
        </nav>
    );
};

export default NavBar;