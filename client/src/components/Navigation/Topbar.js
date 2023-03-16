import CustomLink from "../../customComponents/CustomLink"
import { useLogout } from "../../hooks/useLogout"
export default function NavBar() {

    const { logout } = useLogout() //setting logout funciton
    const user = JSON.parse(localStorage.getItem('user'))

    return <div className="Topbar">
        <CustomLink to="/social-add">Add Social Media Accounts +</CustomLink>
        <div>
            <img src={user.profile_pic} alt=""></img>
            <button onClick={logout}>Log Out</button>
        </div>
    </div>
}
