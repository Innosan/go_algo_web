<script setup lang="ts">
const props = defineProps({
	navigateTo: String,
});
</script>

<template>
	<div class="flex gap-3 items-center">
		<img
			class="opacity-70"
			src="~assets/icons/ui/ic_link.svg"
			alt="Link icon"
		/>
		<a class="general-link" :href="navigateTo" target="_blank"
			>Страница хакатона</a
		>
	</div>
</template>

<style scoped></style>
