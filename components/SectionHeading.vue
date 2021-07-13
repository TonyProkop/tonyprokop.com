<template>
	<div class="section-heading" :class="{ '--centered': centered }">
		<p class="name">
			<slot name="name"></slot>
		</p>
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
			default: false
		}
	}
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
	font-weight: 600;
	font-size: 1.4rem;
	text-transform: uppercase;
	color: var(--clr-gray-1);
}


.title {
	margin: 2rem 0;
}
</style>