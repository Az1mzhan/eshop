let navbar_expand = () => {
    let x = document.getElementById("nav-collapse");
    if (x.className === "myNav")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "myNav";
    }
};