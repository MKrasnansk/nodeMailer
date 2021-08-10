const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  // fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
    // fetch(`https://localhost:${process.env.PORT}/send`, {
    fetch(`http://localhost/send`, {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
