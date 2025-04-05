document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".completed-btn");
    const remainingEl = document.querySelector(".remaining");
    const doneEl = document.querySelector(".done");
    const historyEl = document.getElementById("history-container");
    const clearBtn = document.getElementById("clear-history");
  
    let remaining = parseInt(remainingEl.textContent);
    let done = parseInt(doneEl.textContent);
    let totalClicked = 0;
  
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
  
        // Disable the button when clicked
        btn.disabled = true;
        btn.classList.add("opacity-50", "cursor-not-allowed");
        btn.textContent = "Done";
  
        // Update remaining and done counters
        remaining = Math.max(0, remaining - 1);
        done += 1;
        totalClicked += 1;
        remainingEl.textContent = String(remaining).padStart(2, '0');
        doneEl.textContent = String(done).padStart(2, '0');
  
        // Get the current time for the task completion log
        const now = new Date();
  
        // Get the task title from the corresponding card (h3 text)
        const taskTitle = btn.closest('.card').querySelector('h3').textContent;
  
        // Add history message to the history container
        const msg = document.createElement("p");
        msg.textContent = `Task: "${taskTitle}" completed at ${now.toLocaleTimeString()}`;
        historyEl.appendChild(msg);
  
        // Show alert for successful board update
        alert(`Board updated successfully`);
  
        // If all tasks are completed, show a final alert
        if (totalClicked === buttons.length) {
          setTimeout(() => {
            alert("Congratulations!!! You have completed all the current tasks.");
          }, 300);
        }
      });
    });
  
    // Clear history when 'Clear History' button is clicked
    clearBtn.addEventListener("click", () => {
      historyEl.innerHTML = '';
    });
  });
  

  