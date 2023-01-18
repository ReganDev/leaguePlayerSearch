export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">site name</a>
        <ul>
            <li>
                <a href="/pricing">pricing</a>
            </li>
            <li>
                <a href="/about">about</a>
            </li>
            <li>
                <a href="/about">contact</a>
            </li>
        </ul>
    </nav>
    )
}