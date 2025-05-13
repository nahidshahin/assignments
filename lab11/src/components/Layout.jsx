import { Outlet, Link, NavLink } from 'react-router'
function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul className='layoutul'>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/books">Books</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}

export default Layout;