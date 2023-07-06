document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get selected rating
  var rating = document.querySelector('input[name="rating"]:checked');

  // Get feedback message
  var feedback = document.querySelector('textarea[name="message"]').value;

  // Perform necessary actions with the rating and feedback (e.g., send them to a server or display them on the page)

  // Redirect to the thank you page
  window.location.href = 'thankyou.html';
});
