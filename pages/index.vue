<template>
	<div>
		<section id="hero">
			<div class="section-content">
				<div class="name">Freelance Web Designer and Developer</div>
				<h1 class="title">I build websites that grow business.</h1>
				<p>
					Establishing a solid online presence is hard, especially while running
					a business. Partner with me and don't worry about it! I will design,
					build, host and maintain your website long term so you can focus on
					the important stuff - running your business.
				</p>
				<div class="button-container">
					<Button link="/contact" text="Get in touch" :primary="true" />
					<Button link="/#portfolio" text="View my work" />
				</div>
			</div>
			<nuxt-img
				src="/hero.png"
				class="hero-img"
				alt="Tony Prokop"
				quality="100"
			/>
		</section>

		<section id="companies">
			<div class="section-content">
				<div class="card">
					<p>Companies I've Worked For</p>
					<div class="work-logos">
						<WPEngine />
						<Flywheel />
						<Speedway />
					</div>
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
					“I worked with Tony to setup a website for my small business. Tony was
					consultative and responsive throughout the entire process. This
					enabled us to get the website built quickly. I would not hesitate to
					recommend Tony. He is easy to work with.”
				</p>
			</div>
		</section>

		<section id="portfolio">
			<div class="section-content">
				<SectionHeading>
					<template v-slot:name> Portfolio </template>
					<template v-slot:title> My Latest Work </template>
				</SectionHeading>
				<ul class="accordion">
					<li
						v-for="(project, index) in projects"
						:key="index"
						class="accordion-item"
					>
						<input
							type="radio"
							name="project"
							:id="`project-${index}`"
							:value="index"
							:checked="index === 0"
						/>
						<label :for="`project-${index}`" tabindex="0">
							{{ project.title }}
							<ArrowUp class="arrow-up" />
							<ArrowDown class="arrow-down" />
						</label>
						<div class="content">
							<nuxt-img
								:src="`/projects/${project.imageFileName}`"
								:alt="project.title"
								width="500"
								height="296"
							/>
							<div>
								<p>
									{{ project.description }}
								</p>
								<Button
									:link="project.link"
									:external="true"
									text="View live site"
								/>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<section id="process">
			<div class="section-content">
				<SectionHeading>
					<template v-slot:name> Services </template>
					<template v-slot:title> My Process </template>
				</SectionHeading>
				<ul class="accordion">
					<li
						v-for="(process, index) in processes"
						:key="index"
						class="accordion-item"
					>
						<input
							type="radio"
							name="process"
							:id="`process-${index}`"
							:value="index"
							:checked="index === 0"
						/>
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
		</section>

		<section id="contact">
			<div class="section-content">
				<SectionHeading :centered="true">
					<template v-slot:name> Need a website? </template>
					<template v-slot:title> Let's work together. </template>
				</SectionHeading>
				<Button
					class="contact-button"
					link="/contact"
					text="Contact me"
					:primary="true"
				/>
			</div>
		</section>
	</div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Button from "../components/Button.vue"
import SectionHeading from "../components/SectionHeading.vue"
import ContactForm from "../components/ContactForm.vue"
import ChevronRightSvg from "~/static/chevron-right.svg?inline"
import WPEngine from "~/static/wpengine.svg?inline"
import Flywheel from "~/static/flywheel.svg?inline"
import Speedway from "~/static/speedway.svg?inline"
import Quote from "~/static/quote-left-solid.svg?inline"
import ArrowUp from "~/static/arrow-up-solid.svg?inline"
import ArrowDown from "~/static/arrow-down-solid.svg?inline"
import ArrowRight from "~/static/arrow-right-solid.svg?inline"
import projectData from "~/assets/projects.json"
import processData from "~/assets/process.json"

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
		ArrowRight,
	},

	data() {
		return {
			projects: [...projectData],
			processes: [...processData],
		}
	},
}
</script>

<style  lang="scss">
#hero {
	position: relative;
	max-width: var(--max-width);
	margin: -12.1rem auto 0;

	.section-content {
		padding-top: 20rem;
		z-index: 1;
		position: relative;
	}

	.name {
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 500;
	}

	.title {
		display: block;
		margin: 5rem 0;
		max-width: 65rem;
	}

	.hero-img {
		display: block;
		position: absolute;
		right: 0;
		bottom: -100px;
		width: 70%;
		z-index: 0;
	}

	@media (max-width: 1240px) {
		.hero-img {
			display: none;
		}
	}

	.button-container {
		display: flex;
		flex-wrap: wrap;
		margin-top: calc(5rem - var(--default-white-space));

		.button {
			margin-top: var(--default-white-space);
		}

		.button:first-child {
			margin-right: 3rem;
		}
	}
}

@media (max-width: 1035px) {
	.hero-img {
		display: none;
	}
}

#companies {
	position: relative;
	background: linear-gradient(0deg, var(--clr-black) 50%, transparent 50%);

	.section-content {
		max-width: var(--max-width);
		padding: 0 var(--default-white-space);
		margin: 0 auto;
	}

	.card {
		background: white;
		text-transform: uppercase;
		border-radius: 10px;
		margin: 0 auto;
		padding: 5rem;
		box-shadow: 0px 0px 40px 30px rgba(48, 55, 50, 0.03);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 10;

		p {
			font-size: 1.6rem;
			font-weight: 500;
			margin-bottom: calc(var(--default-white-space) / 2);
		}

		.work-logos {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			svg {
				margin: 0 2.5rem 0;
			}
		}

		@media (max-width: 700px) {
			.work-logos {
				flex-direction: column;

				svg {
					margin-top: var(--default-white-space);
				}
			}
		}
	}

	@media (min-width: 1024px) {
		.card {
			justify-content: space-between;
			flex-direction: row;

			p {
				margin-bottom: 0;
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
		flex-basis: 5rem;
		margin-right: 3rem;
	}

	.section-content {
		display: flex;
		flex-direction: column;
	}

	.left-container {
		display: flex;
		align-items: center;
		margin-bottom: var(--default-white-space);
	}

	@media (min-width: 1024px) {
		.section-content {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start !important;
		}

		.left-container {
			flex-basis: 295px;
		}
	}

	.name {
		font-size: 2.4rem;
		font-weight: 500;
		text-transform: unset;
		margin-bottom: 1rem;
	}

	.business {
		font-size: 1.4rem;
		font-weight: normal;
	}

	.quote {
		font-size: clamp(2.4rem, 5vw, 3.6rem);
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
	border-top: 1px solid var(--clr-gray-2);

	&:first-child {
		border: none;
	}

	svg {
		max-width: 3rem;
		max-height: 3rem;
		transition: color 0.3s ease;
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
		font-weight: 500;
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
				max-height: 600px;
				margin-bottom: 5rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		&:not(:checked) + label {
			svg {
				color: var(--clr-gray-2);
			}

			&:hover {
				svg {
					color: var(--clr-gray-1);
				}
			}
		}
	}

	.content {
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		max-height: 0;
		transition: max-height 0.5s ease;

		img {
			max-width: 500px;
			width: 100%;
			height: auto;
		}

		p {
			margin: 2em 0;
		}
	}

	@media (min-width: 950px) {
		.content {
			flex-wrap: nowrap;

			img {
				margin-right: 5rem;
			}
		}
	}
}

#process {
	background-color: var(--clr-black);

	*:not(svg):not(path) {
		color: var(--clr-white) !important;
	}

	.accordion-item {
		border-color: var(--clr-gray);

		input[type="radio"]:checked + label + .content {
			max-height: 160px !important;
		}
	}

	svg {
		color: var(--clr-gray);
	}
}

#contact {
	.contact-button {
		margin: 0 auto;
		display: flex;
		width: fit-content;
	}

	.section-heading {
		margin: 0;
	}

	.section-heading .title {
		margin: 0.5em 0 0.7em;
	}
}
</style>
