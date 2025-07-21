document.addEventListener("DOMContentLoaded", () => {
  const email = "vitali313.vs" + "@" + "googlemail.com";
  document.getElementById("email").innerHTML = `<a href="mailto:${email}">${email}</a>`;
});
