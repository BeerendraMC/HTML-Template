function myFunction() {
    var x = document.getElementById("mynavbar-items");
    var n = document.getElementById("mynavbar");
    var m = document.getElementById("mymaincontent");
    if (x.className === "navbar-items" && n.className === "navbar") {
        x.className += " responsive";
        n.className += " responsive";
        m.className += " responsive";
    } else {
        x.className = "navbar-items";
        n.className = "navbar";
        m.className = "mcontent";
    }
}