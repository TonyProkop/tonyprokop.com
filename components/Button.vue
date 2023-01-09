<template>
	<a
		v-if="link && external"
		:href="link"
		class="button"
		:class="{ '--primary': primary }"
	>
		<div class="button-text">
			{{ text }}
		</div>
		<ArrowRight />
	</a>
	<nuxt-link
		v-else-if="link"
		:to="link"
		class="button"
		:class="{ '--primary': primary }"
	>
		<div class="button-text">
			{{ text }}
		</div>
		<ArrowRight />
	</nuxt-link>
	<button v-else class="button" :type="type" :class="{ '--primary': primary }">
		<span class="button-text">
			{{ text }}
		</span>
		<ArrowRight />
	</button>
</template>

<script>
import ArrowRight from "~/static/arrow-right-solid.svg?inline"

export default {
	components: {
		ArrowRight,
	},

	props: {
		link: {
			type: String,
			default: "",
		},
		external: {
			type: Boolean,
			default: false,
		},
		text: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: "",
		},
		primary: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem 2.5rem;
	border: none;
	background-color: var(--clr-gray-3);
	font-weight: 500;
	width: fit-content;
	transition: all 150ms ease 0s;
	cursor: pointer;
	border-radius: 5px;

	&.--primary {
		background-color: var(--clr-primary);
	}

	.button-text,
	svg {
		color: var(--clr-black);
	}

	.button-text {
		font-size: 1.6rem;
		margin-right: 1rem;
		flex-shrink: 0;
	}

	svg {
		transform: translateX(0);
		transition: all 200ms ease 0s;
		flex-basis: 1.5rem;
		flex-shrink: 0;
		max-width: 1rem;
	}

	&:hover,
	&:active {
		filter: brightness(95%);

		svg {
			transform: translateX(5px);
		}
	}

	&:active {
		transform: scale(0.97);
	}
}
</style>
