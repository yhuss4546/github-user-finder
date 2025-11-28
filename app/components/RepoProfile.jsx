import Link from "next/link"
import { FaCodeBranch, FaExclamationCircle, FaEye, FaStar } from "react-icons/fa"

const RepoProfile = async({repoData}) => {
    const repo = await repoData
  return (
    <div className="container profile repo-profile">
        <h2>{repo.name}</h2>
        <h3>{`#${repo.id}`}</h3>
        <div className="buttons">
            <button><Link href={`/repos/${repo.owner.login}`}>BACK TO REPOSITORIES</Link></button>
            <button><Link href={repo.html_url}>VIEW ON GITHUB</Link></button>
        </div>
        <p>{repo.description != null ? repo.description : "No description available."}</p>
        <div className="icons">
                    <span>
                      <FaStar/>
                      <p>{repo.stargazers_count}</p>
                    </span>
                    <span>
                      <FaCodeBranch/>
                      <p>{repo.forks}</p>
                    </span>
                    <span>
                      <FaEye/>
                      <p>{repo.watchers}</p>
                    </span>
                    <span>
                      <FaExclamationCircle/>
                      <p>{repo.open_issues}</p>
                    </span>
        </div>
        <div className="details">
            <span>
                <h3>Language</h3>
                <h3>{repo.language != null ? repo.language : "None"}</h3>
            </span>
            <span>
                <h3>Size</h3>
                <h3>{`${repo.size} KB`}</h3>
            </span>
            <span>
                <h3>Default Branch</h3>
                <h3>{repo.default_branch != null ? repo.default_branch : "None"}</h3>
            </span>
            <span>
                <h3>Visibility</h3>
                <h3>{repo.visibility}</h3>
            </span>
            <span>
                <h3>Subscribers</h3>
                <h3>{repo.subscribers_count}</h3>
            </span>
        </div>
    </div>
  )
}

export default RepoProfile