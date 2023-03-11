import CustomLink from "../../customComponents/CustomLink"
import { useLogout } from "../../hooks/useLogout"
export default function NavBar() {

    const { logout } = useLogout() //setting logout funciton
    const user = JSON.parse(localStorage.getItem('user'))

    return <div className="Topbar">
        <CustomLink to="/social-add">Add Social Media Accounts</CustomLink>
        <div>
            {user.email}
            <button onClick={logout}>Log Out</button>
        </div>
    </div>
}
