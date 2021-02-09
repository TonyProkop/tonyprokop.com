<template>
	<div>
		<div class="hero">
			<div>
				<div class="name">Tony Prokop</div>
				<h1 class="title">
					I build websites <br/>for local businesses
				</h1>
				<a href="/#portfolio" class="button hero-cta">
					View Latest Work
					<ChevronRightSvg />
				</a>
			</div>
			<img src="~/static/me.webp" class="hero-img" alt="Tony Prokop" />
		</div>

		<!-- Portfolio -->
		<Section id="portfolio" :layer="1">
			<template v-slot:guts>
				<SectionHeading>
					<template v-slot:name>
						Portfolio
					</template>
					<template v-slot:title>
						My Latest Work
					</template>
				</SectionHeading>
				<div class="work-block-container">
					<WorkBlock v-for="(workBlock, index) in workBlocks" :key="index" :title="workBlock.title" :link="workBlock.link" :imageFileName="workBlock.imageFileName" />
				</div>
			</template>
		</Section>

		<!-- Services -->
		<Section id="services">
			<template v-slot:guts>
				<SectionHeading>
					<template v-slot:name>
						Services
					</template>
					<template v-slot:title>
						What I Offer
					</template>
				</SectionHeading>
				<div class="services-container">
					<Service v-for="(service, index) in services" :key="index" :n="index + 1" :icon="service.icon" :title="service.title" :paragraphs="service.paragraphs" />
				</div>
			</template>
		</Section>

		<!-- Contact -->
		<Section id="contact">
			<template v-slot:guts>
				<SectionHeading>
					<template v-slot:name>
						Need a website?
					</template>
					<template v-slot:title>
						<a href="/contact" class="contact-link">
							Let's work together
							<ChevronRightSvg class="test" />
						</a>
					</template>
				</SectionHeading>
			</template>
		</Section>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Section from '../components/Section.vue';
import Service from '../components/Service.vue';
import SectionHeading from '../components/SectionHeading.vue';
import WorkBlock from '../components/WorkBlock.vue';
import ContactForm from '../components/ContactForm.vue';
import ChevronRightSvg from '~/static/chevron-right.svg?inline';
import workBlockData from "~/assets/work-blocks.json";

export default {
	components: {
		Header,
		Footer,
		Section,
		Service,
		SectionHeading,
		WorkBlock,
		ContactForm,
		ChevronRightSvg,
	},
	data () {
		return {
			workBlocks: [
				...workBlockData
			],
			services: [
				{
					icon: "design",
					title: "Web Design",
					paragraphs: [
						"I work with you while creating mock-ups to ensure the product matches your vision and accomplishes your goals."
					]
				},
				{
					icon: "development",
					title: "Custom Web Development",
					paragraphs: [
						"I create your website from the ground up using the latest technologies. The final product will be fast, accessible, and secure."
					]
				},
				{
					icon: "hosting",
					title: "Fully Managed Hosting",
					paragraphs: [
						"I handle hosting, servers, deployments, backups, and more. You get a hassle-free website that just works."
					]
				},
				{
					icon: "support",
					title: "Support & Maintenance",
					paragraphs: [
						"I work with you to iterate on your site, adding new features, applying security patches, and fixing occasional bugs."
					]
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
.hero {
	/* Minus header height */
	min-height: calc(100vh - 90px);
    display: flex;
    align-items: center;
    justify-content: center;
	padding: 8rem 3rem 10rem;
}

.name {
	text-transform: uppercase;
}

.title {
  font-weight: 700;
  display: block;
  font-size: 6.4rem;
  margin: 6rem 6rem 6rem 0;
  margin-right: 6rem;
  flex-basis: 54rem;
  flex-grow: 0;
  max-width: 82.5rem;
}

.hero-img {
	display: block;
	max-width: 35rem;
	border-radius: 0.5rem;
}

@media(max-width: 1216px) {
	.title {
		font-size: 4.8rem;
	}
}

@media(max-width: 1035px) {
	.name,
	.title {
		margin-left: 0;
		margin-right: 0;
		text-align: center;
	}

	.hero-img {
		display: none;
	}

	.hero-cta {
		margin: 0 auto;
	}
}

.work-block-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 5rem;
	row-gap: 5rem;
	margin: 0 auto;
}

@media(max-width: 1000px) {
	.work-block-container {
		grid-template-columns: 1fr;
	}
}

.services-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 5rem;
	row-gap: 5rem;
	margin: 0 auto;
}

@media(max-width: 840px) {
	.services-container {
		grid-template-columns: 1fr;
	}
}

.contact-link {
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	text-align: center;

	svg {
		width: 2rem;
	}
}

@media(max-width: 653px) {
	.contact-link {
		font-size: 3.6rem;
	}
}
</style>
