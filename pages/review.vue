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
					<input id="name" type="text" name="name" required />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label for="feedback">Feedback</label>
					<textarea id="description" rows="5" name="description" required />
				</div>
			</div>
			<div class="form-row">
				<div class="form-group">
					<label for="rating-5">rating</label>
					<label for="rating-5" class="radio">
						<input type="radio" name="rating" id="rating-5" value="5" checked="checked">
						5 stars
					</label>
					<label for="rating-4" class="radio">
						<input type="radio" name="rating" id="rating-4" value="4">
						4 stars
					</label>
					<label for="rating-3" class="radio">
						<input type="radio" name="rating" id="rating-3" value="3">
						3 stars
					</label>
					<label for="rating-2" class="radio">
						<input type="radio" name="rating" id="rating-2" value="2">
						2 stars
					</label>
					<label for="rating-1" class="radio">
						<input type="radio" name="rating" id="rating-1" value="1">
						1 star
					</label>
				</div>
			</div>
			<div class="form-row button-row">
				<Button type="submit" text="Submit Review" :primary="true" />
			</div>
		</form>
	</div>
</template>

<script>
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';
import ChevronRightSvg from '~/static/chevron-right.svg?inline';

export default {
	layout: 'dark',

	components: {
		ContactForm,
		Button,
		ChevronRightSvg
	}
}
</script>

<style scoped lang="scss">
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
	font-size: 1.8rem;
}

.radio {
	display: flex;

	input {
		flex-basis: auto;
		width: unset;
		margin-right: .5em;
	}
}
</style>