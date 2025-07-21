const postList = document.getElementById("post-list");
const errorDiv = document.getElementById("error");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-btn");

// Fetch 
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts.");
    }

    const posts = await response.json();
    renderPosts(posts);
  } catch (err) {
    errorDiv.textContent = err.message;
  }
}

// Render 
function renderPosts(posts) {
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    li.addEventListener("click", () => showPostDetails(post));
    postList.appendChild(li);
  });
}

// Show 
function showPostDetails(post) {
  modalTitle.textContent = post.title;
  modalBody.textContent = post.body;
  modal.classList.remove("hidden");
}

// Close on button click
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close if clicked outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Start 
fetchPosts();
