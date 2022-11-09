// baru coy
// to select button in accordion
const accordionHead = document.querySelectorAll(".accordion button");
// to select img in accordion
const accordionImg = document.querySelectorAll(".accordion img");

// to add .active in img inside accordion
accordionImg[0].classList.add('active')

// loop
for (let i = 0; i < accordionHead.length; i++) {
  // function that we want to start
  accordionHead[i].addEventListener("click", function () {

    for(let j = 0; j < accordionImg.length; j++){
      // to remove active class from img inside accordion
      accordionImg[j].classList.remove('active')
    }

    // to add active class from img inside accordion
    accordionImg[i].classList.add("active");
  })
}
