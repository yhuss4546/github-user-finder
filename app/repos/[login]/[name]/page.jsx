import RepoProfile from "@/app/components/RepoProfile"

async function fetchRepo(name, repoName){
  try {
    const response = await fetch(`https://api.github.com/repos/${name}/${repoName}`, {
        next: {
            revalidate: 60
        }})
    if(!response.ok){
      toast.error("Couldn't fetch repositories!")
      return
    }
    const repo = await response.json()
    return repo
  } catch (error) {
    
  }
}

const page = async({params}) => {
    const repoData = await params
    const repo = await fetchRepo(repoData.login, repoData.name)
  return (
    <div className="box">
    <RepoProfile repoData={repo}/>
    </div>
  )
}

export default page