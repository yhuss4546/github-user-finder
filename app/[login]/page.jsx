import toast from "react-hot-toast"
import Profile from "../components/Profile"

async function fetchUser(name){
    try {
        const response = await fetch(`https://api.github.com/users/${name}`, {
        next: {
            revalidate: 60
        }})
        if(!response.ok){
            toast.error("Couldn't Find User!")
            return
        }
        const user = await response.json()
        return user
    } catch (error) {
        toast.error("Something Went Wrong!")
        return
    }
}

const UserPage = async({params}) => {
    const name = await params
    const userData = await fetchUser(name.login)
  return (
    <div>
        <Profile userData={userData}/>
    </div>
  )
}

export default UserPage