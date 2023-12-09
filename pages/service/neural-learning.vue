<script setup lang="ts"></script>

<template>
	<div class="flex gap-4 items-center">
		<PageHeading icon="ui/ic_neural_network" title="Обучение сети" />
		<NuxtLink to="/service/neural-learning/all">Все сети</NuxtLink>
		<NuxtLink to="/service/neural-learning/add-new"
			>Добавить новую</NuxtLink
		>
	</div>
	<NuxtPage />
</template>

<style scoped></style>
