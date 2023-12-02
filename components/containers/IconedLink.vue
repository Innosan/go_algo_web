<script setup lang="ts">
const props = defineProps({
	navigateTo: String,
	icon: String,
});
</script>

<template>
	<div class="flex gap-3">
		<img :src="'~assets/icons/ui/'" alt="" />
		<a class="general-link" href="https://goalgo.ru/" target="_blank"
			>Страница хакатона</a
		>
	</div>
</template>

<style scoped></style>
