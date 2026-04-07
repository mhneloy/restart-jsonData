const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};

const displayPosts = (posts) => {
  // 1. get the container
  const post_container = document.getElementById("post-container");
  post_container.innerHTML = "";
  let count = 0;
  posts.forEach((post) => {
    count++;
    const postCard = document.createElement("div");
    postCard.classList = "post-card";
    postCard.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}}${count}</p>
  `;
    post_container.append(postCard);
  });
};

console.log("hello");
