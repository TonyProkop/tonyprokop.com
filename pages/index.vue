<template>
	<div>
		<section class="hero">
			<div class="section-content hero-content">
				<div class="name">Freelance Web Designer and Developer</div>
				<h1 class="title">
					I build websites for local businesses.
				</h1>
				<p>
					Establishing a solid online presence is hard, especially while wearing multiple hats running a business. Partner with me and don’t worry about it! I will design, build, host and maintain your website long term so you can focus on the important stuff - running your business.
				</p>
				<div>
					<Button link="/portfolio" text="Get in touch" :primary="true" />
					<Button link="/#portfolio" text="View my work" />
				</div>
			</div>
			<img src="~/static/hero.png" class="hero-img" alt="Tony Prokop" />
		</section>

		<section id="companies">
			<div class="section-content">
				<p>
					Companies I've Worked For
				</p>
				<div class="work-logos">
					<WPEngine />
					<Flywheel />
					<Speedway />
				</div>
			</div>
		</section>

		<section id="testimonials">
			<div class="section-content">
				<div class="left-container">
					<Quote />
					<div class="person">
						<div class="name">Greg Schmaderer</div>
						<div class="business">My Whiskey Barrel</div>
					</div>
				</div>
				<p class="quote">
					“I worked with Tony to setup a website for my small business. Tony was consultative and responsive throughout the entire process. This enabled us to get the website built quickly. I would not hesitate to recommend Tony. He is easy to work with.”
				</p>
			</div>
		</section>

		<section id="portfolio">
			<div class="section-content">
				<SectionHeading>
					<template v-slot:name>
						Portfolio
					</template>
					<template v-slot:title>
						My Latest Work
					</template>
				</SectionHeading>
				<ul class="accordion">
					<li v-for="(project, index) in projects" :key="index" class="accordion-item">
						<input type="radio" name="project" :id="`project-${index}`" :value="index" :checked="index === 0">
						<label :for="`project-${index}`">
							{{ project.title }}
							<ArrowUp class="arrow-up" />
							<ArrowDown class="arrow-down" />
						</label>
						<div class="content">
							<img :src="require(`@/static/projects/${project.imageFileName}`)" :alt="project.title">
							<div>
								<p>
									{{ project.description }}
								</p>
								<Button :link="project.link" text="View Live Site" />
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<section id="process">
			<div class="section-content">
				<SectionHeading>
					<template v-slot:name>
						Services
					</template>
					<template v-slot:title>
						My Process
					</template>
				</SectionHeading>
				<ul class="accordion">
					<li v-for="(process, index) in processes" :key="index" class="accordion-item">
						<input type="radio" name="process" :id="`process-${index}`" :value="index" :checked="index === 0">
						<label :for="`process-${index}`">
							{{ process.title }}
							<ArrowUp class="arrow-up" />
							<ArrowDown class="arrow-down" />
						</label>
						<p class="content">
							{{ process.description }}
						</p>
					</li>
				</ul>
			</div>
		</Section>

		<section id="contact">
			<div class="section-content">
				<SectionHeading :centered="true">
					<template v-slot:name>
						Need a website?
					</template>
					<template v-slot:title>
						Let's work together.
					</template>
				</SectionHeading>
				<Button class="contact-button" link="/contact" text="Contact me" :primary="true" />
			</div>
		</Section>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Button from '../components/Button.vue';
import SectionHeading from '../components/SectionHeading.vue';
import ContactForm from '../components/ContactForm.vue';
import ChevronRightSvg from '~/static/chevron-right.svg?inline';
import WPEngine from '~/static/wpengine.svg?inline';
import Flywheel from '~/static/flywheel.svg?inline';
import Speedway from '~/static/speedway.svg?inline';
import Quote from '~/static/quote-left-solid.svg?inline';
import ArrowUp from '~/static/arrow-up-solid.svg?inline';
import ArrowDown from '~/static/arrow-down-solid.svg?inline';
import ArrowRight from '~/static/arrow-right-solid.svg?inline';
import projectData from "~/assets/projects.json";
import processData from "~/assets/process.json";

export default {
	components: {
		Header,
		Footer,
		Button,
		SectionHeading,
		ContactForm,
		ChevronRightSvg,
		WPEngine,
		Flywheel,
		Speedway,
		Quote,
		ArrowUp,
		ArrowDown,
		ArrowRight
	},

	data () {
		return {
			projects: [
				...projectData
			],
			processes: [
				...processData
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
}

#companies {
	position: relative;

	.section-content {
		position: absolute;
		top: -76px;
		left: 0;
		right: 0;
		background: white;
		text-transform: uppercase;
		border-radius: 10px;
		margin: 0 auto;
		padding: 5rem;
		box-shadow: 0px 0px 40px 30px rgba(48, 55, 50, 0.03);
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 10;

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
}

#testimonials {
	background-color: var(--clr-black);

	*:not(svg):not(path) {
		color: var(--clr-white);
	}

	svg {
		flex-basis: 3rem;
		margin-right: 3rem;
	}

	.section-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-start !important;
	}

	.left-container {
		display: flex;
		flex-basis: 295px;
		align-items: flex-start;
	}

	.name {
		font-size: 2.4rem;
		font-weight: 700;
		text-transform: unset;
		margin-bottom: 1rem;
	}

	.business {
		font-size: 1.4rem;
		font-weight: normal;
	}

	.quote {
		font-size: 3.6rem;
		font-style: italic;
		font-weight: normal;
	}
}

.accordion {
	margin: 0;
	padding: 0;
}

.accordion-item {
	list-style: none;
	border-top: 1px solid var(--clr-gray);

	&:first-child {
		border: none;
	}

	svg {
		max-width: 3rem;
		max-height: 3rem;
	}

	.arrow-up {
		display: none;
	}

	label {
		display: flex;
		justify-content: space-between;
		padding: 5rem 0;
		cursor: pointer;
		font-size: 2.4rem;
		font-weight: 600;
	}

	input[type="radio"] {
		display: none;

		&:checked + label {

			.arrow-up {
				display: block;
			}

			.arrow-down {
				display: none;
			}

			& + .content {
				margin-bottom: 5rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.content {
		display: none;

		img {
			max-width: 500px;
			margin-right: 5rem;
		}

		p {
			font-size: 1.6rem;
			margin-bottom: 2rem;
		}
	}
}

#process {
	background-color: var(--clr-primary);
}

#contact {
	.contact-button {
		margin: 0 auto;
		display: flex;
		width: fit-content;
	}
}
</style>
