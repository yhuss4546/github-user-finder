import Repo from "@/app/components/Repo"
import Link from "next/link"
import toast from "react-hot-toast"

async function fetchRepos(name){
  try {
    const response = await fetch(`https://api.github.com/users/${name}/repos`, {
        next: {
            revalidate: 60
        }})
    if(!response.ok){
      toast.error("Couldn't fetch repositories!")
      return
    }
    const repos = await response.json()
    return repos
  } catch (error) {
    
  }
}


const RepoPage = async({params}) => {
  const name = await params
  const repos = await fetchRepos(name.login)
  return (
    <div className="repo-container">
      <h2>{`${name.login}'s repositories`}</h2>
      <div className="buttons">
      <button><Link href={`/${name.login}`}>PROFILE</Link></button>
      <button><Link href={repos[0].owner.type == "Organization" ? `https://github.com/orgs/${name.login}/repositories` : `https://github.com/${name.login}?tab=repositories`}>GITHUB REPOSITORIES</Link></button>
      </div>
    <ul className="repos">
      {repos.length != 0 ? repos.map(repo => <Repo repoData={repo} key={repo.id}/>) : "No repositories available."}
    </ul>
    </div>
  )
}

export default RepoPage