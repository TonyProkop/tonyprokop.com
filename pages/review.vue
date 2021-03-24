<template>
	<div class="container">
		<h1 class="heading">It was great working with you!</h1>
		<p class="paragraph">
			Feedback is important! Let me know how it was working together.
		</p>
		<form class="form" name="review" method="post" data-netlify="true" netlify-honeypot="super-secret-field">
			<input name="super-secret-field" />
			<div class="form-row">
				<div class="form-group">
					<label for="name">Name</label>
					<input id="name" type="text" name="name" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label for="feedback">Feedback</label>
					<textarea id="description" rows="5" name="description" />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label for="rating-5">rating</label>
					<label for="rating-5">
						<input type="radio" name="rating" id="rating-5" value="5" checked="checked">
						5 stars
					</label>
					<label for="rating-4">
						<input type="radio" name="rating" id="rating-4" value="4">
						4 stars
					</label>
					<label for="rating-3">
						<input type="radio" name="rating" id="rating-3" value="3">
						3 stars
					</label>
					<label for="rating-2">
						<input type="radio" name="rating" id="rating-2" value="2">
						2 stars
					</label>
					<label for="rating-1">
						<input type="radio" name="rating" id="rating-1" value="1">
						1 star
					</label>
				</div>
			</div>
			<div class="form-row button-row">
				<button type="submit" class="button form-button">
					Submit Review
					<ChevronRightSvg />
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import ContactForm from '../components/ContactForm';
import ChevronRightSvg from '~/static/chevron-right.svg?inline';

export default {
	components: {
		ContactForm,
		ChevronRightSvg
	}
}
</script>

<style scoped>
.container {
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 5rem;
}

@media(max-width: 600px) {
	.container {
		padding: 0 3rem;
	}
}

.heading {
	font-size: 6.4rem;
	margin-top: 15%;
}

.paragraph {
	margin: 2rem 0 6rem;
}

input[name="super-secret-field"] {
	display: none !important;
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

input:not([type="radio"]), textarea {
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