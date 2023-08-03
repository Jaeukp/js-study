(() => {
  const sidebar = document.createElement("aside");
  sidebar.style.position = "fixed";
  sidebar.style.height = "100vh";
  sidebar.style.width = "200px";

  sidebar.innerHTML = /*html */ `
    <ul>
      <li><a href="/Play/Todolist.html" style="text-decoration: none; color: skyblue;">To-do List</a></li>
      <li><a href="/contact/contact.html" style="text-decoration: none; color: skyblue;">Contacts</a></li>
      <li><a href="/post/post.html" style="text-decoration: none; color: skyblue;">Posts</a></li>
      <li><a href="#" style="text-decoration: none; color: skyblue;">Coming soon</a></li>
    </ul>
  `;

  document.body.prepend(sidebar);
})();