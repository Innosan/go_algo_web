<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<StrategyNavigation />
	<p>{{ route.params.id }}</p>
	<NuxtPage />
</template>

<style scoped></style>
