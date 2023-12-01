<script setup lang="ts">
const props = defineProps({
	title: String,
	navigateTo: String,
});
</script>

<template>
	<NuxtLink class="general-link" :to="props.navigateTo">{{
		props.title
	}}</NuxtLink>
</template>
