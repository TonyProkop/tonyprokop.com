<template>
	<footer>
		<div class="tagline">© {{ year }} Tony Prokop Web Development</div>
		<div class="external-link-container">
			<CircleIcon href="mailto:prokop.tony@gmail.com" title="Email">
				<EmailSvg />
			</CircleIcon>
			<CircleIcon href="https://www.linkedin.com/in/tony-prokop/" title="LinkedIn">
				<LinkedInSvg />
			</CircleIcon>
			<CircleIcon href="https://github.com/TonyProkop" title="Github">
				<GithubSvg />
			</CircleIcon>
		</div>
	</footer>
</template>

<script>
import EmailSvg from '~/static/email.svg?inline';
import LinkedInSvg from '~/static/linkedin.svg?inline';
import GithubSvg from '~/static/github.svg?inline';
import CircleIcon from './CircleIcon';

export default {
	components: {
		EmailSvg,
		LinkedInSvg,
		GithubSvg,
		CircleIcon,
	},

	computed: {
		year () {
			return new Date().getFullYear();
		}
	}
}
</script>

<style scoped lang="scss">
footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 6rem 2rem 2rem;
}

.tagline {
	font-size: 1.4rem;
}

.external-link-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.external-link-container a {
	margin: 0 1rem;

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
}
</style>