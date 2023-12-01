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
	padding: 12px;
	border: 1px solid #373737;
	opacity: 0.7;
	background: #262626;
}
</style>
