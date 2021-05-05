
function Users({ posts }) {
    return (
        <div>
            Users List
            <ul>
                {posts.map((post, _index) => (
                    <li key={_index}>{post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://47ttfwe6fd.execute-api.ap-south-1.amazonaws.com/users')
    const posts = await res.json()

    if (!posts) {
        return {
            notFound: true,
        }
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
        //revalidate: 1000,
    }
}


export default Users