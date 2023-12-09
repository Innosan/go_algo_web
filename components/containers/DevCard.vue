<script setup>
const props = defineProps({
	dev: Object,
});
</script>

<template>
	<div class="flex gap-4 max-w-screen-sm">
		<img
			class="w-44 h-44 object-cover rounded-2xl"
			:src="dev.photo"
			alt=""
		/>
		<div class="w-fit flex flex-col gap-1">
			<p class="text-xl font-bold">{{ dev.name }}</p>
			<p class="opacity-50">{{ dev.role }}</p>
			<div>
				<p v-for="tag in dev.tags">{{ tag }}</p>
			</div>
			<p class="opacity-50">{{ dev.description }}</p>
		</div>
	</div>
</template>

<style scoped>
div {
	opacity: 1 !important;
}
</style>
