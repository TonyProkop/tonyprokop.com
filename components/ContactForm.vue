<template>
	<form class="form" name="contact" method="post" data-netlify="true" netlify-honeypot="super-secret-field">
		<input name="super-secret-field" />
		<div class="form-row half">
			<div class="form-group">
				<label for="name">Name</label>
				<input id="name" type="text" name="name" />
			</div>
			<div class="gutter"></div>
			<div class="form-group">
				<label for="email">Email</label>
				<input id="email" type="text" name="email" />
			</div>
		</div>
		<div class="form-row">
			<div class="form-group">
				<label for="description">Description of project</label>
				<textarea id="description" rows="5" name="description" />
			</div>
		</div>
		<div class="form-row button-row">
			<button type="submit" class="button form-button">
				Send Message
				<ChevronRightSvg />
			</button>
		</div>
	</form>
</template>

<script>
import ChevronRightSvg from '~/static/chevron-right.svg?inline';

export default {
	components: {
		ChevronRightSvg,
	}
}
</script>

<style scoped>
	input[name="super-secret-field"] {
		display: none;
	}

	.form {
		max-width: 800px;
		margin: 0 auto;
		display: grid;
	}

	.form-row {
		display: flex;
		margin-bottom: 3rem;
	}

	.form-row.half .form-group {
		flex-basis: 50%;
	}

	@media(max-width: 700px) {
		.form-row.half {
			flex-wrap: wrap;
		}

		.form-row.half .form-group {
			flex-basis: 100%;
		}
	}

	.form-group {
		width: 100%;
	}

	.gutter {
		width: 30px;
		height: 30px;
	}

	label {
		display: block;
		margin-bottom: 1rem;
		flex: none;
		text-transform: uppercase;
		font-size: 1.4rem;
	}

	input, textarea {
		display: block;
		width: 100%;
		border: none;
		padding: 2rem;
		border-radius: .5rem;
		font-size: 1.8rem;
		color: #FFFFFF;
		background-color: #3B4252;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus {
		border: none;
		-webkit-text-fill-color: #FFFFFF;
		-webkit-box-shadow: 0 0 0 1000px #3B4252 inset;
		transition: background-color 5000s ease-in-out 0s;
	}

	.form-button {
		width: fit-content;
	}

	.button-row {
		flex-direction: row-reverse;
	}
</style>