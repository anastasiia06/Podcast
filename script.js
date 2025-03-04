document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".cta-button");
    menuButton.addEventListener("click", () => {
        alert("Contact us for more details!");
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const blogGrid = document.querySelector(".blog-grid");
    const loadMoreButton = document.getElementById("load-more");


    const blogPosts = [
        {
            title: "The Future of Sustainable Fashion",
            image: "fashion1.jpg",
            excerpt: "Discover how brands are embracing sustainability in 2024.",
            link: "https://hbr.org/2019/07/lifes-work-an-interview-with-vera-wang"
        },
        {
            title: "Breaking Boundaries: How Emerging Designers are Redefining Fashion",
            image: "fashion2.jpg",
            excerpt: "Explore the bold ideas and innovative styles shaping the future of the fashion industry.",
            link: "https://www.risefashionevents.com/post/how-emerging-fashion-designers-can-actually-get-noticed"
        },
        {
            title: "How to Style Vintage Clothing",
            image: "fashion3.jpg",
            excerpt: "A guide to mixing modern and vintage styles seamlessly.",
            link: "https://ohjoy.com/my_weblog/2022/01/how-to-style-vintage-clothing-to-look-modern.html"
        },
        {
            title: "Must-Have Accessories for 2025",
            image: "fashion4.jpg",
            excerpt: "These trendy accessories are taking over the fashion world.",
            link: "https://www.glamour.com/story/accessory-trends"
        }
    ];

    let displayedPosts = 0;
    const postsPerLoad = 2;

    function loadBlogPosts() {
        for (let i = displayedPosts; i < displayedPosts + postsPerLoad; i++) {
            if (i >= blogPosts.length) {
                loadMoreButton.style.display = "none";
            }

            const post = blogPosts[i];
            const blogItem = document.createElement("div");
            blogItem.classList.add("blog-post");
            blogItem.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="${post.link}" target="_blank">Read More</a>
            `;

            blogGrid.appendChild(blogItem);
        }
        displayedPosts += postsPerLoad;
    }

    loadMoreButton.addEventListener("click", loadBlogPosts);
    loadBlogPosts();
});


