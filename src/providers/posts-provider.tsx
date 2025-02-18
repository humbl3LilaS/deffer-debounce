import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {getPosts, Post} from "../query/posts.ts";

const PostContext = createContext<Post[] | null>(null)


export const PostProvider = ({children}: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        getPosts().then((res) => setPosts(res))
    }, [])
    return <PostContext value={posts}>{children}</PostContext>
}


export const usePosts = () => {
    const post = useContext(PostContext);
    if (!post) {
        throw new Error("usePosts must be used within the PostProvider");
    }
    return post;
}