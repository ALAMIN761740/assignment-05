 document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("currentDate");
    const dateElement2 = document.getElementById("currentDate-2");
    const now = new Date();

    const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);

    dateElement.textContent = formattedDate;
    
  });


  