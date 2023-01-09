<template>
	<div class="section-heading" :class="{ '--centered': centered }">
		<h2 class="title">
			<slot name="title"></slot>
		</h2>
	</div>
</template>

<script>
export default {
	props: {
		centered: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped lang="scss">
.section-heading {
	width: 100%;
	margin-bottom: 5rem;
}

.--centered {
	text-align: center;

	.name,
	.title {
		margin: 0 auto;
	}
}

.name {
	font-weight: 500;
	font-size: 1.4rem;
	text-transform: uppercase;
	color: var(--clr-gray-1);
}
</style>