function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

document.addEventListener("click", function(event) {
  if (event.target.matches("#scroll-work-right-control")) {
    var width = document.getElementsByClassName("work-card")[0].scrollWidth
    var container = document.getElementById("work-container")
    container.scrollLeft = container.scrollLeft + width + convertRemToPixels(6)
  }

  if (event.target.matches("#scroll-work-left-control")) {
    var width = document.getElementsByClassName("work-card")[0].scrollWidth
    var container = document.getElementById("work-container")
    container.scrollLeft = container.scrollLeft - width - convertRemToPixels(6)
  }
})
