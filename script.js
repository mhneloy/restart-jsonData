const postedDiv = document.getElementById("allposted-data");

const loadPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  postedDiv.append(data);
};
