<template>
	<div class="section-heading">
		<div class="name">
			<slot name="name"></slot>
		</div>
		<div class="title">
			<slot name="title"></slot>
		</div>
	</div>
</template>

<style scoped>
.section-heading {
	text-align: center;
	width: 100%;
	margin-bottom: 10rem;
}

.name {
	font-size: 1.4rem;
	text-transform: uppercase;
}

.name,
.title {
	margin: 0 auto;
}

.title {
	font-size: 4.8rem;
	font-weight: 700;
	margin: 2rem 0;
}
</style>