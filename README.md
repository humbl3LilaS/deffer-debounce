# Purpose of This Demo

This Demo is about utilizing `useDeferredValue` and `useDebounce` to make a search and filter component performant.

`useDeferredValue` prevent UI lag while rendering a large filter list while `useDebounce` prevents unnecessary filtering
computation when the use is still typing.

Generic Implementation of `useDebounce`.

```typescript
// useDebounce
import {useEffect, useState} from "react";

export const useDebounce = <T, >(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debouncedValue;
}
```

Utilizing The Both

```typescript
const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 1000);
const deferredQuery = useDeferredValue(debouncedQuery);
const posts = usePosts();

const filteredPost = posts.filter(post => post.title.toLowerCase().includes(deferredQuery.toLowerCase()));
```

