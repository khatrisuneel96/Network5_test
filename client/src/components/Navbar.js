import { Link, useMatch, useResolvedPath } from 'react-router-dom'
export default function NavBar() {
    return <div className="nav">
        <ul>
            <CustomLink to="/">Dashboard</CustomLink>
            <CustomLink to="/feed">Feed</CustomLink>
            <CustomLink to="/messages">Messages</CustomLink>
            <CustomLink to="/email">Email</CustomLink>
            <CustomLink to="/rsvp">RSVP</CustomLink>
            <CustomLink to="/analytics">Analytics</CustomLink>
            <CustomLink to="/profile">Profile</CustomLink>
        </ul>
    </div>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })


    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}