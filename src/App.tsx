import {PostProvider} from "./providers/posts-provider.tsx";
import PostList from "./components/post-list.tsx";

function App() {
    return <PostProvider>
        <main className={"w-screen h-screen flex justify-center items-center bg-blue-200"}>
            <section className={"w-3/4 p-8 rounded-xl bg-white shadow-md"}>
                <h1 className={"mb-4 font-bold text-lg"}>Search Posts</h1>
                <PostList/>
            </section>
        </main>
    </PostProvider>;
}

export default App;
