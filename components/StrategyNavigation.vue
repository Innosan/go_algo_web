<script setup lang="ts">
const route = useRoute();
const baseRoute = `/strategy/${route.params.id}-${route.params.title}`;
</script>

<template>
	<nav
		class="flex flex-col gap-8 bg-black bg-opacity-90 text-white p-6 rounded-2xl"
	>
		<h3 class="font-bold text-2xl">Стратегия {{ route.params.title }}</h3>
		<ul class="flex flex-row gap-4">
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
				<NuxtLink :to="baseRoute + '/signals'">Сигналы</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
a {
	border-radius: 42px;
	padding: 12px;
	border: 1px solid #6e6e6e;
	opacity: 0.7;
	background: #262626;

	transition: 0.3s;
	&:hover {
		opacity: 1;
	}
}
</style>
