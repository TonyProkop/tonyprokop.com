<template>
	<footer>
		<div class="external-link-container">
			<a href="mailto:prokop.tony@gmail.com" title="Email">
				<EmailSvg />
			</a>
			<a href="https://www.linkedin.com/in/tony-prokop/" title="LinkedIn">
				<LinkedInSvg />
			</a>
			<a href="https://github.com/TonyProkop" title="Github">
				<GithubSvg />
			</a>
		</div>
		<div class="tagline">© {{ year }} Tony Prokop Web Development</div>
	</footer>
</template>

<script>
import EmailSvg from '~/static/email.svg?inline';
import LinkedInSvg from '~/static/linkedin.svg?inline';
import GithubSvg from '~/static/github.svg?inline';

export default {
	components: {
		EmailSvg,
		LinkedInSvg,
		GithubSvg,
	},

	computed: {
		year () {
			return new Date().getFullYear();
		}
	}
}
</script>

<style scoped>
footer {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	text-align: center;
	padding: 6rem 0;
}

.tagline {
	margin-top: 6rem;
	font-size: 1.4rem;
}

.external-link-container {
	display: flex;
	margin: 0 auto;
}

.external-link-container a {
	width: 5rem;
	height: 5rem;
	border-radius: 100%;
	background-color: #3B4252;
	text-decoration: none;
	color: #D8DEE9;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 2rem;
}

.external-link-container a:hover {
	background-color: #434C5E;
}

.external-link-container a:active {
	background-color: #4C566A;
}
</style>