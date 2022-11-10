const Dropdown = () => {
    return (
        <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">De Accion</a></li>
            <li><a className="dropdown-item" href="#">De Anime</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">De Juegos</a></li>
          </ul>
        </li>
        </>
    );
}

export default Dropdown;
