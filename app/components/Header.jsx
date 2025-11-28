import Link from "next/link"
import {FaGithub} from "react-icons/fa"

const Header = () => {
  return (
    <header>
        <Link href={"/"}>
        <FaGithub className="github-icon"/>
        <h1>GitHub User Finder</h1>
        </Link>
            <button><Link href={"/"}>HOME</Link></button>
    </header>

  )
}

export default Header