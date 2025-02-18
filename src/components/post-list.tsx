import {usePosts} from "../providers/posts-provider.tsx";
import {useDeferredValue, useState} from "react";
import {useDebounce} from "../hooks/use-debounce.tsx";

const PostList = () => {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 1000);
    const deferredQuery = useDeferredValue(debouncedQuery);
    const posts = usePosts();

    const filteredPost = posts.filter(post => post.title.toLowerCase().includes(deferredQuery.toLowerCase()));
    return (
        <div className={"overflow-y-scroll"}>
            <div className={"flex flex-col gap-y-2"}>
                <label htmlFor={"posts"}>
                    Search Posts
                </label>
                <input id={"posts"}
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       className={"block py-2 px-4 border border-black/60 rounded-lg focus:outline-0"}/>
            </div>
            <div className={"overflow-y-scroll"}>
                {filteredPost.length === 0 &&
                    <div>
                        <h2> No Posts</h2>
                    </div>
                }
                {filteredPost && filteredPost.length > 10 && <>
                {
                    filteredPost.slice(0, 10).map(post => <article key={post.id}>
                        <h2>{post.title}</h2>
                    </article>)
                }
                    <button className={"p-2 border border-black/50 rounded-lg"}>See more</button>
                </>}

                {
                    filteredPost && filteredPost.length < 10 &&
                    filteredPost.map(post => <article key={post.id}>
                        <h2>{post.title}</h2>
                    </article>)
                }
            </div>
        </div>
    );
};

export default PostList;