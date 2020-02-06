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

  if (event.target.matches("#theme-toggle .moon")) {
    document.documentElement.classList.add("dark-mode")
    const button = document.getElementsByClassName("moon")[0]
    button.classList.remove("moon")
    button.classList.add("sun")
    const use = button.getElementsByTagName("use")[0]
    use.setAttribute("href", "/icons/sun.svg#sun")
  } else if (event.target.matches("#theme-toggle .sun")) {
    document.documentElement.classList.remove("dark-mode")
    const button = document.getElementsByClassName("sun")[0]
    button.classList.remove("sun")
    button.classList.add("moon")
    const use = button.getElementsByTagName("use")[0]
    use.setAttribute("href", "/icons/moon.svg#moon")
  }
})
