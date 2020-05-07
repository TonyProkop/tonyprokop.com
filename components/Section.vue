<template>
	<section :id="id" :class="`${className} layer-${layer}`">
		<div class="guts">
			<slot name="guts" />
		</div>
	</section>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: false,
			default: ''
		},
		layer: {
			type: Number,
			required: false,
			default: 0
		},
		className: {
			type: String,
			required: false,
			default: ""
		}
	}
}
</script>

<style scoped>
	.guts {
		margin: 0 auto;
		padding: 10rem 3rem;
		max-width: 125rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.layer-1 {
		background-color: #3B4252;
	}
</style>