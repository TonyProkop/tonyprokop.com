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

	&.menuOpen {
		overflow: hidden;
	}
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
}

a,
button {
	&:hover {
		filter: brightness(120%);
	}

	&:active {
		filter: brightness(140%);
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

.button {
	background-color: #88C0D0;
	color: #3B4252;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 3rem;
	border-radius: 5rem;
	border: none;
	font-weight: 700;
	width: fit-content;
}

.circle-icon {
	width: 5rem;
	height: 5rem;
	border-radius: 100%;
	background-color: #3B4252;
	text-decoration: none;
	color: #D8DEE9;
	display: grid;
	place-items: center;
	border: none;
	cursor: pointer;

	&:hover {
		filter: brightness(120%);
	}

	&:active {
		filter: brightness(140%);
	}
}
</style>
