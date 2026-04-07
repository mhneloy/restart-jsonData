const loadPost = () => {
  const url1 = "https://jsonplaceholder.typicode.com/posts";
  fetch(url1)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};

const displayPosts = async (posts) => {
  const url2 = "https://jsonplaceholder.typicode.com/todos";
  const todos = await fetch(url2);
  const todosData = await todos.json();
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
    post_container.appendChild(postCard);
  });
  todosData.forEach((todo) => {
    const h4 = document.createElement("h4");
    h4.innerHTML = `
    ${todo.title}
    ${todo.completed === true ? `<i class="fa-solid fa-circle-check"></i>` : ``}`;
    post_container.appendChild(h4);
    console.log(h4);
  });
};

console.log("hello");
