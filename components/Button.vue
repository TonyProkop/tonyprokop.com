<template>
	<a v-if="link" :href="link" class="button" :class="{ '--primary': primary }">
		<div class="button-text">
			{{ text }}
		</div>
		<ArrowRight />
	</a>
	<button v-else class="button" :class="{ '--primary': primary }">
		<div class="button-text">
			{{ text }}
		</div>
		<ArrowRight />
	</button>
</template>

<script>
import ArrowRight from '~/static/arrow-right-solid.svg?inline';

export default {
	components: {
		ArrowRight
	},

	props: {
		link: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			required: true
		},
		primary: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2.4rem 4rem;
	border: none;
	background-color: var(--clr-light-gray);
	color: var(--clr-black);
	font-weight: 600;
	width: fit-content;
	transition: all 200ms ease 0s;

	&.--primary {
		background-color: var(--clr-primary);
	}

	.button-text {
		font-size: 1.6rem;
		margin-right: 40px;
		flex-shrink: 0;
	}

	svg {
		transform: translateX(0);
		transition: all 200ms ease 0s;
		flex-basis: 1.5rem;
		flex-shrink: 0;
	}

	&:hover,
	&:active {
		filter: brightness(90%);

		svg {
			transform: translateX(10px);
		}
	}
}
</style>