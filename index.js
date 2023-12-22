var siteName = document.getElementById("siteName");
var url = document.getElementById("siteUrl");
var submitButton = document.getElementById("submitButton");
var display = document.getElementById("show");
var Delete = document.getElementById("delete");
var visit = document.getElementById("visit");
var bookmark = [];

localStorage.getItem("bookmark") != null &&
  (bookmark = JSON.parse(localStorage.getItem("bookmark"))),
  displayBookmark();
// localStorage.clear();
function submit() {
  if (
    (isNaN(siteName.value) &&
      url.value.startsWith("www") &&
      url.value.endsWith(".com")) ||
    url.value.startsWith("https://")
  ) {
    console.log(typeof url.value);
    addProduct();
    displayBookmark();
    siteName.value = "";
    url.value = "";
  } else {
    alert("Please enter valid details 😒");
  }
}
function addProduct() {
  bookmarkDEtails = {name: siteName.value, url: url.value};
  bookmark.push(bookmarkDEtails);
  localStorage.setItem("bookmark", JSON.stringify(bookmark));
}
function displayBookmark() {
  var cartona = "";
  for (var i = 0; i < bookmark.length; i++) {
    cartona += `<tr>
    <td class="align-middle">${i}</td>
    <td class="align-middle">${bookmark[i].name}</td>
    <td>
      <button class="btn btn-warning px-3 ms-3" id="visit" >
        <i class="fa-solid fa-eye text-white pe-1" ></i> <a href="https://${bookmark[i].url}" target="_blank"  class="text-decoration-none text-white">Visit</a>
      </button>
    </td>
    <td>
      <button class="btn btn-danger px-3 ms-3" id="delete" onclick="deleteDEtails(${i})">
        <i class="fa-solid fa-trash pe-1"></i> Delete
      </button>
    </td>
    </tr>`;
  }
  display.innerHTML = cartona;
}
function deleteDEtails(index) {
  bookmark.splice(index, 1);
  displayBookmark();
}
