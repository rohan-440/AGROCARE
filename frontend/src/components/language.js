const LanguageDropdown = (props) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Change Language
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a onClick={() => props.onChange('hi')} className="dropdown-item" href="#">Hindi</a></li>
                {/* Add more language options here */}
            </ul>
        </li>
    );
}

export default LanguageDropdown;
