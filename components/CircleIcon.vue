<template>
	<a :href="href" :title="title" class="circle-icon">
		<slot />
	</a>
</template>

<script>
export default {
	props: {
		href: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped lang="scss">
.circle-icon {
	width: 5rem;
	height: 5rem;
	border-radius: 100%;
	background-color: #3B4252;
	text-decoration: none;
	color: #D8DEE9;
	display: grid;
	place-items: center;

	&:hover {
		cursor: pointer;
		background-color: #434C5E;
	}

	&:active {
		background-color: #4C566A;
	}
}
</style>