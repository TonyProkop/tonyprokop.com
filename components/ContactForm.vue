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
			<Button class="button" type="submit" text="Send message" :primary="true" />
		</div>
	</form>
</template>

<script>
import ChevronRightSvg from '~/static/chevron-right.svg?inline';
import Button from '../components/Button';

export default {
	components: {
		ChevronRightSvg,
		Button
	}
}
</script>