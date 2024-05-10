import { useEffect, useState } from "react"
import styles from "./page.module.scss"
import GithubRepository from "../components/GithubRepository"

export default () => {
    const [githubRepos, setGithubRepos] = useState([])

    const getGithubDetails = async() => {
        const requestUrl = import.meta.env.VITE_GITHUB_API_URL_TEMPLATE.replace("{username}", import.meta.env.VITE_GITHUB_USERNAME)
        const data = await (await fetch(requestUrl, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESSTOKEN}`
            }
        })).json()

        setGithubRepos(data)
    }

    useEffect(() => {
        getGithubDetails()
    }, [])

    return (
        <div className={styles.pageWrapper}>
            <h1>Mina projekt</h1>
            <p>En lista över projekt från min GitHub:</p>
            {githubRepos.map((item, i) => (
                <GithubRepository
                    key={i}
                    name={item.name}
                    stars={item.stargazers_count}
                    url={item.svn_url}
                    updatedAt={item.updated_at}
                    owner={item.owner.login}
                />
            ))}
        </div>
    )
}
