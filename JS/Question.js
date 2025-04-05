document.addEventListener("DOMContentLoaded", () => {
      const toggles = document.querySelectorAll(".question");

      toggles.forEach((q) => {
        q.addEventListener("click", () => {
          const answer = q.nextElementSibling;
          answer.classList.toggle("hidden");
        });
    });
});



document.getElementById("backBtn").addEventListener("click", function () {
    window.location.href = "index.html"; 
  });
  