<template>
	<a :href="link" class="work-block">
		<h4 class="title">{{title}}</h4>
		<img :src="require(`@/static/work/${imageFileName}`)" :alt="title" class="image" />
	</a>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		imageFileName: {
			type: String,
			required: true,
		},
	}
}
</script>

<style scoped>
.work-block {
	background-color: #434C5E;
	text-decoration: none;
	display: block;
	position: relative;
	max-height: 30rem;
	max-width: 30rem;
	overflow: hidden;
}

.work-block:hover {
	background-color: #4C566A;
}

.title {
	position: absolute;
	top: 3rem;
	left: 3rem;
	font-size: 2.4rem;
	font-weight: normal;
}

.image {
	margin-top: 3rem;
}
</style>