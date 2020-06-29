<template>
  <nuxt />
</template>

<script>
export default {
	head: {
		title: "The Homepage of Tony Prokop | tonyprokop.com",
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ hid: "description", name: "description", content: "I'm a freelance web designer and developer, located in Omaha, NE." }
		],
		link: [
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" }
		]
	}
}
</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  box-sizing: border-box;
}

body {
	font-size: 1.8rem;
	background-color: #2E3440;
	color: #D8DEE9;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  color: #D8DEE9;
}

*::selection {
	background-color: #8FBCBB;
	color: #ECEFF4;
}

p {
	max-width: 50rem;
	line-height: 3rem;
}

.fa-chevron-right {
	margin-left: 1rem;
}
</style>
