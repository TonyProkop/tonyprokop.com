<template>
	<a v-if="link" :href="link" class="button" :class="{ '--primary': primary }">
		<div class="button-text">
			{{ text }}
		</div>
		<ArrowRight />
	</a>
	<button v-else class="button" :type="type" :class="{ '--primary': primary }">
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
		type: {
			type: String,
			default: ''
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
	background-color: var(--clr-gray-3);
	font-weight: 600;
	width: fit-content;
	transition: all 200ms ease 0s;
	cursor: pointer;

	&.--primary {
		background-color: var(--clr-primary);
	}

	.button-text,
	svg {
		color: var(--clr-black);
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
		filter: brightness(95%);

		svg {
			transform: translateX(10px);
		}
	}
}
</style>