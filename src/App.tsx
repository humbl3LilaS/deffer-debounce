import {useEffect, useState} from "react";
import {getPosts, Post} from "./query/posts.ts";

function App() {
    const [post, setPost] = useState<Post[]>([]);
    useEffect(() => {
        getPosts().then((res) => setPost(res))
    }, [])

    return <div className="text-3xl font-bold">Test</div>;
}

export default App;
