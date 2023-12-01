<script setup lang="ts">
const route = useRoute();
const baseRoute = `/strategy/${route.params.id}`;
</script>

<template>
	<nav>
		<ul class="flex flex-row gap-4 bg-gray-700 text-white p-3 rounded-2xl">
			<li><NuxtLink :to="baseRoute + '/mark-up'">Разметка</NuxtLink></li>
			<li>
				<NuxtLink :to="baseRoute + '/generate-dataset'"
					>Генерация дата-сета
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="baseRoute + '/neural-learning'"
					>Обучение сети
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="baseRoute + '/back-testing'"
					>Бек-тесты
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="baseRoute + '/signals'">Сигналы </NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
a {
	border-radius: 42px;
	border: 1px solid #a4a4a4;
	background: rgba(237, 67, 69, 0.4);
	padding: 12px;
}
</style>
