export type Testimonial = {
  heading: string;
  quote: string;
  name: string;
  position: string;
  /** Portrait in `public/testimonials/`. Falls back to initials when absent. */
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    heading: "He's an inspiration",
    quote:
      "Tony has had a massive impact on User Portal and his fellow devs. He shows great initiative, consistently goes above and beyond expectations, and is constant inspiration for others. We are incredibly fortunate to have him and his expertise.",
    name: "Cathal Mac Donnacha",
    position: "Principal Software Engineer",
    image: "/testimonials/cathal.png",
  },
  {
    heading: "He's easy to work with",
    quote:
      "I worked with Tony to setup a website for my small business. Tony was consultative and responsive throughout the entire process. This enabled us to get the website built quickly. I wouldn't hesitate to recommend Tony. He is easy to work with.",
    name: "Greg Schmaderer",
    position: "Business Owner",
    image: "/testimonials/greg.png",
  },
  {
    heading: "Better than AI",
    quote:
      "Forget the AI hype, all focus should be in cloning Tony. The dude is the best parts of humans and machine. He cranks out perfect code with a thoughtfulness and humor.",
    name: "Shannon Sorensen",
    position: "Senior Product Designer",
    image: "/testimonials/shannon.png",
  },
  {
    heading: 'He\'s my "go-to"',
    quote:
      'This recognition is long overdue, Tony has helped me out on several occasions now - he has become my "go-to" person when I have frontend questions. He always makes my issue feel important and finds time to help out! Appreciate you Tony!',
    name: "Vivek Patel",
    position: "Senior Software Engineer",
    image: "/testimonials/vivek.png",
  },
  {
    heading: "How does he do it?",
    quote:
      "I'm not sure how he does it, but Tony has been everywhere the last few weeks. He somehow finds time to hop on a zoom, answer questions async, and give feedback on PRs all while breezing through his own sprint work. Truly an inspiration friend!",
    name: "Savannah Albanez",
    position: "Software Engineer",
    image: "/testimonials/savannah.png",
  },
];
