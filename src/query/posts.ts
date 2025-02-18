export type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<Post[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()) as unknown as Post[];
}