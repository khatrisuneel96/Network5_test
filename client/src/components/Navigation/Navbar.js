import CustomLink from "../../customComponents/CustomLink"
export default function NavBar() {

    const user = JSON.parse(localStorage.getItem('user'))

    return <div className="nav">
        <ul>
            <CustomLink to="/">Dashboard</CustomLink>
            <CustomLink to="/feed">Feed</CustomLink>
            <CustomLink to="/messages">Messages</CustomLink>
            <CustomLink to="/email">Email</CustomLink>
            <CustomLink to="/rsvp">RSVP</CustomLink>
            <CustomLink to="/analytics">Analytics</CustomLink>
            <CustomLink to={"/profile/"+user.email}>Profile</CustomLink>
        </ul>
    </div>
}
