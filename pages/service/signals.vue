<script setup lang="ts"></script>

<template>
	<div class="flex gap-4 items-center">
		<PageHeading icon="ui/ic_signals" title="Сигналы" />
		<NuxtLink to="/service/signals/all">Все сигналы</NuxtLink>
		<NuxtLink to="/service/signals/add-new">Добавить новую</NuxtLink>
	</div>
	<NuxtPage />
</template>

<style scoped></style>
