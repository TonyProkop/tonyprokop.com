<template>
	<footer>
		<div class="tagline">© {{ year }} Tony Prokop</div>
		<div class="external-link-container">
			<a href="mailto:prokop.tony@gmail.com" class="circle-icon" title="Email">
				<EmailSvg />
			</a>
			<a href="https://www.linkedin.com/in/tony-prokop/" class="circle-icon" title="LinkedIn">
				<LinkedInSvg />
			</a>
			<a href="https://github.com/TonyProkop" class="circle-icon" title="Github">
				<GithubSvg />
			</a>
		</div>
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

<style scoped lang="scss">
footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	padding: var(--default-white-space);

	.tagline,
	svg {
		color: var(--clr-gray-2);
	}
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
	margin: 0 calc(var(--default-white-space) / 2);

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}
}
</style>