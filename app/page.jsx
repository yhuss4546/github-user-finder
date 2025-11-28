'use client';
import { useState} from "react";
import toast from "react-hot-toast";
import Link from "next/link";
export default function HomePage() {
  const [search, setSearch] = useState("")
  const [user, setUser] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
      async function fetchUser(){
        const response = await fetch(`https://api.github.com/users/${search}`, {
        next: {
            revalidate: 60
        }})
        if(!response.ok){
          toast.error("User Does Not Exist!")
          return
        }
        const user = await response.json()
        setUser(user)
      }
      fetchUser()
    }
  return (
  <>
  <div className="container box">
  <div className="container main search-menu">
    <h2>Find Any User On GitHub!</h2>
    <p>Type any name into the search bar below.</p>
    <form action="" className="search" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type in a username..." onChange={e => setSearch(e.target.value)}/>
      <button type="submit">SEARCH</button>
    </form>
  </div>
  {user == "" &&   <div className="container skeleton">
    <div className="profile-main">
      <div className="placeholder-img">l A l</div>
      <h2>AAAAAAAAAAAa</h2>
    </div>
    <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAl</p>
  </div>
  }
  {
    user != ""  && <div className="container card">
    <div className="profile-main">
      <img src={user.avatar_url} alt="" />
      <h2>{user.login}</h2>
    </div>
    <p>{user.bio ? user.bio : "This user has no bio."}</p>
    <div className="buttons">
      <button><Link href={`/${user.login}`}>PROFILE</Link></button>
      <button><Link href={`/repos/${user.login}`}>REPOSITORIES</Link></button>
    </div>
  </div>
  }
  </div>
  </>
  );
}
