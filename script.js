

    function generateTable() {
      var word = document.getElementById("wordInput").value;
      var tableContainer = document.getElementById("tableContainer");
      
      if (word.trim() === "") {
        tableContainer.innerHTML = "<p>Please enter a word.</p>";
        return;
      }
      
      tableContainer.innerHTML = ""; // Clear existing content
      
      var i = 1;
      var interval = setInterval(function() {
        if (i > 10) {
          clearInterval(interval);
          return;
        }
        
        var row = document.createElement("tr");
        row.className = "fadeIn";
        
        var equationCell = document.createElement("td");
        equationCell.textContent = i + " x " + word;
        
        var equalsCell = document.createElement("td");
        equalsCell.textContent = "=";
        
        var resultCell = document.createElement("td");
        resultCell.textContent = i * word.length;
        
        row.appendChild(equationCell);
        row.appendChild(equalsCell);
        row.appendChild(resultCell);
        
        tableContainer.appendChild(row);
        
        i++;
      }, 1000);
    }
