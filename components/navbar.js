import Link from "next/link";

export default function NavBar({ children }) {
    return (<div>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/users/users-list">
                    <a>Users</a>
                </Link>
            </li>
            <li>
                <Link href="/users/users-list-ssr">
                    <a>Users Server-Side-Render</a>
                </Link>
            </li>
        </ul></div>)
}