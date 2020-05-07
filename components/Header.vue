<template>
		<header class="header">
			<ul class="menu">
				<li class="item">
					<a href="#">Home</a>
				</li>
				<li class="item">
					<a href="#portfolio">Portfolio</a>
				</li>
				<li class="item">
					<a href="#services">Services</a>
				</li>
				<li class="item">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</header>
</template>

<style scoped>
.header {
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	padding: 2rem;
	width: 100%;
	margin: 0 auto;
}

.menu {
	display: flex;
	padding: 0;
}

.item {
	list-style: none;
	padding: 0 1rem;
}

.item a {
	text-decoration: none;
	color: inherit;
}
</style>