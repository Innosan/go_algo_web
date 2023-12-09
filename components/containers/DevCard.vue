<script setup>
const props = defineProps({
	dev: Object,
});
</script>

<template>
	<div class="dev-card grid grid-cols-2 gap-2">
		<img
			class="object-cover rounded-2xl w-40 h-40"
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

.dev-card {
	width: 45%;
}
</style>
