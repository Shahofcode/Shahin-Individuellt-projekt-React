import styles from "./GithubRepository.module.scss"

export default ({ name, stars, url, updatedAt, owner }) => {
    return (
        <div className={styles.githubRepositoryWrapper}>
            <div className={styles.githubRepository} onClick={() => window.open(url)}>
                <div className={styles.githubRepositoryName}>
                    {name}
                </div>
                <div className={styles.githubRepositoryStars}>
                    Stars: {stars}
                </div>
                <div className={styles.githubRepositoryUpdatedAt}>
                    Senast uppdaterad: {new Date(updatedAt).toLocaleDateString()}
                </div>
                <div className={styles.githubRepositoryOwner}>
                    Ägs av: {owner}
                </div>
            </div>
        </div>
    )
}