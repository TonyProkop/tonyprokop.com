function convertRemToPixels (rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

function toggleTheme () {
	if (document.documentElement.classList.contains("dark-mode")) {
		document.documentElement.classList.remove("dark-mode");
	} else {
		document.documentElement.classList.add("dark-mode");
	}
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = toggleTheme;
themeToggle.onkeypress = function (event) {
	if (event.key === 'Enter') {
		toggleTheme(); // This doesn't work for some reason
		console.log(event.key);
	}
};

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
});