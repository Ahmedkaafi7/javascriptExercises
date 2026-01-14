// Get elements
const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const contentInput = document.getElementById("content");
const addPostBtn = document.getElementById("addPost");
const postsDiv = document.getElementById("posts");

// Load posts from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Save to localStorage
function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Display posts
function renderPosts() {
  postsDiv.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
      <h4>${post.title}</h4>
      ${post.image ? `<img src="${post.image}" />` : ""}
      <p>${post.content}</p>
      <button onclick="editPost(${index})">Edit</button>
      <button onclick="deletePost(${index})">Delete</button>
    `;

    postsDiv.appendChild(postDiv);
  });
}

// Add post
addPostBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Title and content are required!");
    return;
  }

  posts.push({ title, image, content });
  savePosts();
  renderPosts();

  // Clear inputs
  titleInput.value = "";
  imageInput.value = "";
  contentInput.value = "";
});

// Delete post
function deletePost(index) {
  posts.splice(index, 1);
  savePosts();
  renderPosts();
}

// Edit post
function editPost(index) {
  const post = posts[index];

  titleInput.value = post.title;
  imageInput.value = post.image;
  contentInput.value = post.content;

  // Remove old post
  posts.splice(index, 1);
  savePosts();
  renderPosts();
}

// Initial render
renderPosts();
