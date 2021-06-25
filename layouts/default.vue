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
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap" }
		]
	},
	
	components: {
		Header,
		Footer
	}
}
</script>

<style lang="scss">
:root {
	--clr-black: #1B1B1B;
	--clr-gray: #2E2E2E;
	--clr-light-gray: #F6F6F6;
	--clr-white: #FFFFFF;
	--clr-primary: #1ED760;
	--max-width: 1280px;
	--default-white-space: 3rem;

	@media (min-width: 650px) {
		--default-white-space: 5rem;
	}
}

html {
  font-family: 'Raleway', sans-serif;
  font-size: 10px;
  font-weight: 400;
  box-sizing: border-box;
}

body {
	font-size: 1.8rem;
	background-color: var(--clr-white);
	color: var(--clr-black);

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
  color: var(--clr-black);
}

a {
	text-decoration: none;
}

*::selection {
	background-color: #8FBCBB;
	color: #ECEFF4;
}

h1,
h2,
h3 {
	line-height: 1.1;
}

h1,
h2 {
	font-size: 6.4rem;
}

p {
	max-width: 60rem;
	line-height: 1.8;
}

section {
  .section-content {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 12rem 3rem;
  }
}

.fa-chevron-right {
	margin-left: 1rem;
}
</style>
