<template>
	<div>
		<Header />

		<div class="hero">
			<h1 class="title">
				I'm Tony Prokop, a <span class="web-developer">web developer</span>.
			</h1>
			<img src="~/static/me.jpg" class="hero-img" alt="Tony Prokop" />
		</div>

		<!-- Portfolio -->
		<Section id="portfolio" :layer="1">
			<template v-slot:guts>
				<SectionHeading name="Portfolio" title="My Latest Work" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
				<div class="work-block-container">
					<WorkBlock v-for="(workBlock, index) in workBlocks" :key="index" :title="workBlock.title" :link="workBlock.link" :imageFileName="workBlock.imageFileName" />
				</div>
			</template>
		</Section>

		<!-- Services -->
		<Section id="services">
			<template v-slot:guts>
				<SectionHeading name="Services" title="What I Offer" paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
				<div class="services-container">
					<Service v-for="(service, index) in services" :key="index" :n="index + 1" :icon="service.icon" :title="service.title" :paragraphs="service.paragraphs" />
				</div>
			</template>
		</Section>

		<!-- Contact -->
		<Section id="contact">
			<template v-slot:guts>
				<SectionHeading name="Contact" title="Let's Work Together" paragraph="Think I might be a fit for your next project? I’d love to hear about it, drop me a message." />
				<ContactForm />
			</template>
		</Section>

		<Footer />
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
import Button from '../components/Button.vue';
import ChevronRightSvg from '~/static/chevron-right.svg?inline';

export default {
	components: {
		Header,
		Footer,
		Section,
		Service,
		SectionHeading,
		WorkBlock,
		ContactForm,
		Button,
		ChevronRightSvg,
	},
	data () {
		return {
			workBlocks: [
				{
					title: 'Flywheel',
					link: 'https://getflywheel.com/',
					imageFileName: 'flywheel.png'
				},
				{
					title: 'Speedway Motors',
					link: 'https://www.speedwaymotors.com/',
					imageFileName: 'speedway.png'
				},
				{
					title: 'Advance Media',
					link: 'https://advancemedia.netlify.app/',
					imageFileName: 'advance-media.png'
				},
				{
					title: 'My Wedding',
					link: 'https://tonykatiewedding.com/',
					imageFileName: 'wedding.png'
				},
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

<style scoped>
.hero {
	/* Minus header height */
	height: calc(100vh - 62px);
    display: flex;
    align-items: center;
    justify-content: center;
	padding: 0 3rem;
}

.title {
  font-weight: 700;
  display: block;
  font-size: 7.2rem;
  margin-right: 6rem;
  flex-basis: 54rem;
  flex-grow: 0;
}

.web-developer {
	color: #81A1C1;
}

.hero-img {
	max-width: 35rem;
	border-radius: 0.5rem;
}

@media(max-width: 900px) {
	.hero {
		flex-direction: column-reverse;
	}

	.title {
		flex-basis: unset;
		margin-right: 0;
		margin-top: 6rem;
		text-align: center;
		max-width: 54rem;
		font-size: 6.4rem;
	}

	.hero-img {
		max-width: 30rem;
	}
}

.work-block-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 5rem;
	row-gap: 5rem;
	margin: 0 auto;
}

@media(max-width: 1000px) {
	.work-block-container {
		grid-template-columns: 1fr 1fr;
	}
}

@media(max-width: 675px) {
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

@media(max-width: 675px) {
	.services-container {
		grid-template-columns: 1fr;
	}
}
</style>
