<template>
	<div class="section-heading" :class="{ '--centered': centered }">
		<h2 class="name">
			<slot name="name"></slot>
		</h2>
		<div class="title">
			<slot name="title"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		centered: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.section-heading {
	width: 100%;
	margin-bottom: 10rem;
}

.--centered {
	text-align: center;
}

.name {
	font-weight: 600;
	font-size: 1.4rem;
	text-transform: uppercase;
	color: var(--clr-gray);
}

.name,
.title {
	margin: 0 auto;
}

.title {
	font-size: 6.4rem;
	font-weight: 700;
	margin: 2rem 0;
}
</style>