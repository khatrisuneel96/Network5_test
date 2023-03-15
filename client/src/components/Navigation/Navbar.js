import CustomLink from "../../customComponents/CustomLink"
import Logo from "../../images/Logo_1.6.png"
export default function NavBar() {

    const user = JSON.parse(localStorage.getItem('user'))

    return <div className="nav">
        <div className="logo">
            <img src={Logo} alt=""></img>
        </div>
        <div className="cornerthing">
            <img src={user.profile_pic} alt=""></img>
            {user.email}
        </div>
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
