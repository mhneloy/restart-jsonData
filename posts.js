const post_container = document.getElementById("post-container");

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};

const displayPosts = (posts) => {
  post_container.append(posts.length + " ");
  //   for (let post of posts) {
  //     allpostedContainer.append(post);
  //     console.log(post);
  //   }

  posts.forEach((post) => {
    post_container.append(post.id + " ");
    console.log(post);
    // create HTML element
    const li = document.createElement("li");
    li.innerText = post.title;
    console.log(li);
    // add li into container
    post_container.appendChild(li);
  });
};
