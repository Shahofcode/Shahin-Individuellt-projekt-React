import "./Header.module.scss"

import Link from "../Link"
import DarkModeSwitch from "../DarkModeSwitch"
import { useMemo } from "react"

export default () => {
    const links = useMemo(() => [
        {
            to: "/",
            text: "Hem"
        },
        {
            to: "/my_projects",
            text: "Mina projekt"
        },
        {
            to: "/contact",
            text: "Kontakta mig"
        }
    ], [])

    return (
        <header>
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <Link {...link} />
                    </li>
                ))}
            </ul>
            <DarkModeSwitch />
        </header>
    )
}