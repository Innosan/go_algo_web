<script setup lang="ts">
const props = defineProps({
	title: String,
	navigateTo: String,
});
</script>

<template>
	<NuxtLink :to="props.navigateTo">{{ props.title }}</NuxtLink>
</template>

<style scoped lang="scss">
a {
	opacity: 0.8;
	transition: 0.3s;

	&:hover {
		opacity: 1;
		color: red;
		text-decoration: underline;
	}
}
</style>
