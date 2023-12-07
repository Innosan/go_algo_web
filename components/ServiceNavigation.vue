<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<nav
		class="flex flex-col gap-8 bg-black bg-opacity-90 text-white p-6 rounded-2xl"
	>
		<ul class="flex flex-row gap-4">
			<li>
				<NuxtLink to="/service/mark-up">Разметка</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/service/dataset">Дата-сеты</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/service/neural-learning"
					>Обучение сети
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/service/back-testing">Бек-тесты </NuxtLink>
			</li>
			<li>
				<NuxtLink to="/service/signals">Сигналы</NuxtLink>
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
