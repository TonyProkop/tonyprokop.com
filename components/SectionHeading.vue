<template>
	<div class="section-heading">
		<div>{{name}}</div>
		<h3 class="title">{{title}}</h3>
		<p class="paragraph" v-if="paragraph">{{paragraph}}</p>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			required: true,
			type: String,
		},
		title: {
			required: true,
			type: String,
		},
		paragraph: {
			required: false,
			type: String,
			default: '',
		}
	}
}
</script>

<style scoped>
.section-heading {
	text-align: center;
	width: 100%;
	margin-bottom: 10rem;
}

.name,
.title,
.paragraph {
	margin: 0 auto;
}

.title {
	font-size: 4.8rem;
	font-weight: 700;
	margin: 2rem 0;
}
</style>