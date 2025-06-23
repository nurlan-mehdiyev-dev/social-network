export function  getMainPagePosts() {
    const sharedImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1YCYVj2UzAJ1BJL2tfmXs5UxHVqQOOWs6A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuIGYKr8z0wIVgT_PEbUvtEM_CkWdQQo2zg&s"
    ];

    const posts = [
        {
            author: "Jackey Chan",
            likes: 10,
            images: sharedImages,
            comments: [
                { author: "Mikel Jackson", text: "good post" }
            ]
        },
        {
            author: "Bruce Lee",
            likes: 25,
            images: sharedImages,
            comments: [
                { author: "Chuck Norris", text: "legend!" },
                { author: "Jet Li", text: "respect!" }
            ]
        },
        {
            author: "Emma Watson",
            likes: 42,
            images: sharedImages,
            comments: [
                { author: "Daniel Radcliffe", text: "Nice shot!" }
            ]
        },
        {
            author: "Tony Stark",
            likes: 100,
            images: sharedImages,
            comments: [
                { author: "Peter Parker", text: "Awesome!" },
                { author: "Steve Rogers", text: "Impressive." }
            ]
        }
    ];

    return posts;
}
