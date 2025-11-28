import Link from 'next/link'
import React from 'react'
import { formatDate } from '../lib/utils'

const Profile = async({userData}) => {
    const user = await userData
  return (
    <div className='container profile'>
        <span className='profile-header'>
            <div>
            <img src={user.avatar_url} alt="" />
            {user.name != null && <h2>{`${user.name} (${user.login})`}</h2>}
            {user.name == null && <h2>{user.login}</h2>}
            </div>
        </span>
            <h3>{`#${user.id}`}</h3>
            <div className='buttons'>
            <button><Link href={user.html_url}>GITHUB PROFILE</Link></button>
            <button><Link href={`/repos/${user.login}`}>REPOSITORIES</Link></button>
            </div>
            <p>{user.bio != null ? user.bio : "This user has no bio."}</p>
        <span className='info'>
            <p>{`followers: ${user.followers}`}</p>
            <p>{`following: ${user.following}`}</p>
            <p>{`public repositories: ${user.public_repos}`}</p>
        </span>
        <div className="details">
                <span>
                    <h3>Type</h3>
                    <h3>{user.type}</h3>
                </span>
                <span>
                    <h3>Hireable</h3>
                    <h3>{user.hireable ? "Yes" : "No"}</h3>
                </span>
                <span>
                    <h3>Location</h3>
                    <h3>{user.location != null ? user.location : "None"}</h3>
                </span>
                <span>
                    <h3>Email</h3>
                    <h3>{user.email != null ? user.email : "None"}</h3>
                </span>
                <span>
                    <h3>Admin</h3>
                    <h3>{user.site_admin ? "Yes" : "No"}</h3>
                </span>
                <span>
                    <h3>Join Date</h3>
                    <h3>{formatDate(new Date(user.created_at))}</h3>
                </span>
        </div>
    </div>
  )
}

export default Profile