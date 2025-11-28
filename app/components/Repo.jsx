import Link from 'next/link'
import React from 'react'
import { FaCodeBranch, FaExclamationCircle, FaEye, FaStar } from 'react-icons/fa'

const Repo = async({repoData}) => {
    const repo = await repoData
  return (
    <div className='repo'>
      <div className='text'>
        <h3>{repo.name}</h3>
        <h4>{`#${repo.id}`}</h4>
        </div>
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
        <div className='buttons'>
          <button><Link href={`/repos/${repo.owner.login}/${repo.name}`}>VIEW REPOSITORY</Link></button>
        </div>
    </div>
  )
}

export default Repo