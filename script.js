//navigation//

//toggle fog visibility//

function toggleFog () {
  const fogTogRight = document.getElementById("fogRight");
  const fogTogLeft = document.getElementById("fogLeft");
    fogTogRight.classList.toggle("hide");
    fogTogLeft.classList.toggle("hide");
    console.log("Fog toggled!");
}

//toggle border visibility

function toggleBorder () {
  const borderTog = document.getElementById("one"); //QUERYSELECTORALL
    if (borderTog.classList.contains("border")){
      borderTog.style.border="0px dotted red";
      borderTog.classList.remove("border");
      console.log("Border deactivated!");
    }
    else {
      borderTog.style.border="1px dotted red";
      borderTog.classList.add("border");
      console.log("Border activated!");
    }
}

// parallaxe
const wrapperTag = document.getElementById("wrapper");

function parallax () {
  var sLeft = wrapperTag.scrollLeft;
  console.log(sLeft);
  console.log("hurra!");
}
