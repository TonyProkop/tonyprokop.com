<template>
	<a :href="link" class="work-block">
		<img :src="require(`@/static/work/${imageFileName}`)" :alt="title" class="image" />
		<div class="overlay">
			<h3 class="title">{{title}}</h3>
		</div>
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

<style scoped lang="scss">
.work-block {
	text-decoration: none;
	display: block;
	position: relative;
	cursor: pointer;
	border-radius: .5rem;
	overflow: hidden;

	&:hover {
		filter: none;

		.overlay {
			opacity: 1;
		}
	}

	&:active {
		filter: none;
	}
}

.overlay {
	display: grid;
	place-items: center;
	opacity: 0;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(94,129,172,0.9);
	transition: opacity 0.2s;
}

.title {
	font-size: 2.4rem;
	font-weight: 500;
}

.image {
	display: block;
	width: 100%;
	filter: drop-shadow(0px 5px 5px rgba(46, 52, 64, 0.25));
}
</style>