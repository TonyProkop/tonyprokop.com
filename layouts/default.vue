<template>
	<div class="page-container">
		<Header />
		<main>
			<nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
	head: {
		title: "Tony Prokop | Web Designer and Developer",
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ hid: "description", name: "description", content: "I'm a freelance web designer and developer, located in Omaha, NE." }
		],
		link: [
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" }
		]
	},
	
	components: {
		Header,
		Footer
	}
}
</script>

<style lang="scss">
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

.page-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
}

main {
	flex-grow: 1;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

*:not(svg):not(path) {
  color: #D8DEE9;
}

a {
	text-decoration: none;

	&:hover {
		color: #ECEFF4;
		text-decoration: underline;
	}
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
