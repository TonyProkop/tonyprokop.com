function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

document.addEventListener("click", function(event) {
  if (event.target.matches("#moon")) {
    document.documentElement.classList.add("dark-mode")
  } else if (event.target.matches("#sun")) {
    document.documentElement.classList.remove("dark-mode")
  }

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

// var work_container = document.getElementById('work-container');
// var clone = work_container.cloneNode(true);
// clone.id = 'work-container-clone';
// work_container.after(clone);
// work_container.onscroll = function() {
// 	var transform = "-" + work_container.scrollLeft + "px";
// 	clone.style.marginLeft = transform;
// 	console.log(transform);
// }