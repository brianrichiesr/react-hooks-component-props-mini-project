import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {

    const createPosts = posts?.map(post => {
        return <Article key={post.id} {...post} />
    })

    return (
        <main>
            {createPosts}
        </main>
    )
}

export default ArticleList;