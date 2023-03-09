import CustomLink from "../../customComponents/CustomLink"
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
