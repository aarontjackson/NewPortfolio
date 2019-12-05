document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

  // contact form submission
  $('#contact-submit').on('click', function (event) {

    event.preventDefault();

    let newContact = {
      name: $('#name').val().trim(),
      email: $('#email').val().trim(),
      comment: $('#comment').val().trim()
    };

    console.log(newContact);

    $.post("/api/contact", newContact)

      .then(function () {
        let row = $("<div>");
        row.addClass("contact");
        row.append("<p>" + newContact.name + "</p>");
        row.append("<p>" + newContact.email + "</p>");
        row.append("<p>" + newContact.comment + "</p>");
      });
  });

  $('#log').text('Message sent!');
  $('#name').val("");
  $('#email').val("");
  $('#comment').val("");
