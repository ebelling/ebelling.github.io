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
const borderTags = document.querySelectorAll(".scene"); //QUERYSELECTORALL

function toggleBorder () {
  borderTags.forEach ( function (bor) {
    //borderz.style.color= "blue";

    if (bor.classList.contains("border")){
      bor.style.border="0px dotted red";
      bor.classList.remove("border");
      console.log("Border deactivated!");
    }
    else {
      bor.style.border="1px dotted red";
      bor.classList.add("border");
      console.log("Border activated!");
    }
  })
}

// parallaxe
const wrapperTag = document.getElementById("wrapper");

function parallax () {
  var sLeft = wrapperTag.scrollLeft;
  console.log(sLeft);
  console.log("hurra!");
}
