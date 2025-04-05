document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeBtn");
    btn.addEventListener("click", changeBackgroundRandomly);
  });
  
  function getRandomColor() {
    const colors = [
      "bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-100", 
      "bg-purple-500", "bg-pink-500", "bg-gray-500", "bg-indigo-500"
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  function changeBackgroundRandomly() {
    const body = document.body;
  
    
    Array.from(body.classList).forEach(cls => {
      if (cls.startsWith("bg-")) {
        body.classList.remove(cls);
      }
    });
  
    
    const newColor = getRandomColor();
    body.classList.add(newColor);
  }
  
  