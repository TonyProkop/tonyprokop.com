<template>
	<button class="button" :type="type">
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			required: false,
			default: 'button'
		}
	}
}
</script>

<style scoped>
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
	font-weight: bold;
}
</style>