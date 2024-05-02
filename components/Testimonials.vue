<template>
	<section id="testimonials">
		<div class="section-content">
			<Quote />
			<div v-for="t in testimonials" :key="t">
				<p v-for="quote in t.quotes" :key="quote">{{ quote }}</p>
				<div>
					{{ t.name }}
					{{ t.role }}
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Quote from "~/static/quote-left-solid.svg?inline"

export default {
  components: {
    Quote
  },

  data() {
		return {
      activeTestimonialIndex: 0,
      testimonials: [
        {
          name: 'Cathal Mac Donnacha',
          role: 'Principal Software Engineer',
          quotes: [
            'Tony has had a massive impact on User Portal and his fellow devs. He shows great initiative, consistently goes above and beyond expectations while making sure to collaborate where everyone feels valued and motivated.',
            'Tony\'s contributions have significantly elevated the quality of features and project wide initiatives, being a constant inspiration for others. We are incredibly fortunate to have him and his expertise.'
          ]
        },
        {
          name: 'Greg Schmaderer',
          role: 'Business owner: My Whiskey Barrel',
          quotes: [
            'I worked with Tony to setup a website for my small business. Tony was consultative and responsive throughout the entire process. This enabled us to get the website built quickly. I would not hesitate to recommend Tony. He is easy to work with.'
          ]
        },
        {
          name: 'Shannon Sorensen',
          role: 'Senior Product Designer',
          quotes: [
            'Forget the AI hype, all focus should be in cloning Tony. Dude is the best parts of humans and machine. He cranks out perfect code with a thoughtfulness and humor.'
          ]
        },
        {
          name: 'Vivek Patel',
          role: 'Senior Product Designer',
          quotes: [
            'This recognition is long overdue, Tony has helped me out on several occasions now - he has become my "go-to" person when I have front-end or growth suite questions.',
            'The best part about Tony is that he always makes my issue feel important and finds time to help out! Appreciate you Tony!'
          ]
        },
        {
          name: 'Savannah Albanez',
          role: 'Software Engineer',
          quotes: [
            'I not sure how he does it, but Tony has been everywhere all at once the last few weeks. With the Accessibility release and the Dashboard release he still has time to hop on a zoom, answer questions async, and notes revisions needed on past PRs - All while breezing through sprint work. Truly an inspiration friend!',
          ]
        }
      ]
		}
	},
}
</script>