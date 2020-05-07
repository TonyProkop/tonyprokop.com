<template>
	<div class="service">
		<div class="icon">
			<DesignSvg v-if="icon === 'design'" />
			<DevelopmentSvg v-if="icon === 'development'" />
			<HostingSvg v-if="icon === 'hosting'" />
			<SupportSvg v-if="icon === 'support'" />
		</div>
		<h4 class="service-title">{{ title }}</h4>
		<p class="service-description" v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
	</div>
</template>

<script>
import DesignSvg from '~/static/design.svg?inline';
import DevelopmentSvg from '~/static/development.svg?inline';
import HostingSvg from '~/static/hosting.svg?inline';
import SupportSvg from '~/static/support.svg?inline';

export default {
	components: {
		DesignSvg,
		DevelopmentSvg,
		HostingSvg,
		SupportSvg,
	},

	props: {
		icon: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		paragraphs: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
.service {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: #3B4252;
	padding: 5rem;
	max-width: 45rem;
}

.icon {
	background-color: #81A1C1;
	width: 10rem;
	height: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10rem;
}

.service-title {
	font-size: 2.4rem;
	margin: 3rem 0;
}

.service-description {
	font-size: 1.8rem;
	margin-bottom: 3rem;
}

.service-description:last-child() {
	margin-bottom: 0;
}
</style>