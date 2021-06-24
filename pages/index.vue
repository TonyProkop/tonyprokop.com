<template>
	<div>
		<div class="hero">
			<div class="hero-content">
				<div class="name">Freelance Web Designer and Developer</div>
				<h1 class="title">
					I build websites for local businesses.
				</h1>
				<p>
					Establishing a solid online presence is hard, especially while wearing multiple hats running a business. Partner with me and don’t worry about it! I will design, build, host and maintain your website long term so you can focus on the important stuff - running your business.
				</p>
				<a href="/#portfolio" class="button hero-cta --primary">
					Get in touch
					<ChevronRightSvg />
				</a>
				<a href="/#portfolio" class="button hero-cta">
					My work
					<ChevronRightSvg />
				</a>
			</div>
			<img src="~/static/hero.png" class="hero-img" alt="Tony Prokop" />
		</div>

		<section id="companies">
			<p>
				Companies I've Worked For
			</p>
			<div class="work-logos">
				<WPEngine />
				<Flywheel />
				<Speedway />
			</div>
		</section>

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
import WPEngine from '~/static/wpengine.svg?inline';
import Flywheel from '~/static/flywheel.svg?inline';
import Speedway from '~/static/speedway.svg?inline';
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
		WPEngine,
		Flywheel,
		Speedway
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
	position: relative;
	max-width: var(--max-width);
	margin: -9rem auto 0;
}

.hero-content {
	padding: 20rem 3rem;
}

.name {
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 600;
}

.title {
  font-weight: 700;
  display: block;
  font-size: 6.4rem;
  margin: 5rem 0;
  margin-right: 6rem;
  flex-basis: 54rem;
  flex-grow: 0;
  max-width: 74rem;
}

.hero-img {
	display: block;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 60%;
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

#companies {
	max-width: var(--max-width);
	width: 100%;
	text-transform: uppercase;
	border-radius: 10px;
	margin: 0 auto;
	padding: 5rem;
	box-shadow: 0px 0px 40px 30px rgba(48, 55, 50, 0.03);
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-size: 1.6rem;
		font-weight: 600;
	}

	.work-logos {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			margin: 0 2.5rem;
		}
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
