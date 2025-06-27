import { useEffect, useState } from "react";
import styles from "./mainPage.module.scss";
import { getMainPagePosts } from "../../utilities/restApi";
import SimpleSlider from "../../components/carousel/SimpleSlider";

export default function MainPage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const newPosts = getMainPagePosts();
        setPosts(newPosts)
        console.log(newPosts)

    }, [])
    return (
        <main className={styles.main}>

            <div className={styles.story}>
                story
            </div>

            <div className={styles.content}>
                <div className="aside_left">
                    aside left
                </div>
                <section className={styles.posts}>
                    {posts.map((post) => {
                        return (
                            <article className={styles.post}>
                                <div>{post.author}</div>
                                <div>
                                    <SimpleSlider images={post.images} />
                                </div>
                                <div>

                                    {
                                        post.comments.map((comment) => {
                                            return (
                                                <div>
                                                    <span>{comment.author}:</span><span> {comment.text}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    ❤️ <br />
                                    likes {post.likes}
                                </div>

                            </article>
                        )
                    })}


                </section>
                <aside className="aside_right">
                    aside right
                </aside>
            </div>




        </main>
    );
}