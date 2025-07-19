const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTableBody");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const submitBtn = document.getElementById("submitBtn");

let products = JSON.parse(localStorage.getItem("products")) || [];
let isEditing = false;
let currentEditId = null;

function renderTable(data = products) {
  tableBody.innerHTML = "";
  data.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.category}</td>
      <td>${product.availability ? "Available" : "Not Available"}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editProduct(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const category = document.getElementById("category").value;
  const availability = document.getElementById("availability").checked;

  if (!name || !description || isNaN(price) || price <= 0 || !category) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const productData = { name, description, price, category, availability };

  if (isEditing) {
    products[currentEditId] = productData;
    submitBtn.textContent = "Add Product";
    isEditing = false;
    currentEditId = null;
  } else {
    products.push(productData);
  }

  saveToLocalStorage();
  renderTable();
  form.reset();
});

function editProduct(index) {
  const product = products[index];
  document.getElementById("name").value = product.name;
  document.getElementById("description").value = product.description;
  document.getElementById("price").value = product.price;
  document.getElementById("category").value = product.category;
  document.getElementById("availability").checked = product.availability;

  submitBtn.textContent = "Update Product";
  isEditing = true;
  currentEditId = index;
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    saveToLocalStorage();
    renderTable();
  }
}

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );
  renderTable(filtered);
});

filterCategory.addEventListener("change", function () {
  const value = this.value;
  const filtered = value
    ? products.filter(p => p.category === value)
    : products;
  renderTable(filtered);
});

// Initial render
renderTable();
