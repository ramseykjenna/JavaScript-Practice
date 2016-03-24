function findNumPizzas() {
    
    // Local Variables
    var attendees = document.getElementById("attendees").value;
    var piecesPerAttendee = document.getElementById("piecesPerAttendee").value;
    var piecesPerPizza = document.getElementById("piecesPerPizza").value;
    
    // Calculate number of pizzas needed
    var totalPieces = attendees * piecesPerAttendee;
    var numPizzas = Math.ceil( totalPieces / piecesPerPizza);
    
    // Concatenate number of pieces to response string
    var response = attendees + " people are attending your party. Each person will eat " + piecesPerAttendee + " pieces of pizza. You will need " + totalPieces + " slices of pizza and " + numPizzas + " pizzas.";

    // Set response to reponse h1 in html
    document.getElementById('response').innerHTML = response;
}