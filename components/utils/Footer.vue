<template>
	<footer
		class="flex flex-col gap-6 bg-black bg-opacity-90 text-white fixed bottom-0 left-0 right-0 shrink-0"
	>
		<AppLogo />
		<div class="opacity-80">
			<p>
				Платформа по построению торговых и инвестиционных стратегий с
				искусственным интеллектом на основе данных AlgoPack
			</p>
			<p>Решение разработано в рамках Хакатона GO.ALGO</p>
		</div>
		<div>
			<h5 class="text-xl font-bold">Участники</h5>
			<div class="flex flex-row gap-6 border-b-2 border-gray-400 pb-2">
				<div v-for="dev in developers">
					<p>{{ dev.name }}</p>
					<p class="opacity-50">{{ dev.role }}</p>
				</div>
			</div>
		</div>
		<div>
			<a class="general-link" href="https://goalgo.ru/" target="_blank"
				>Страница хакатона</a
			>
		</div>
	</footer>
</template>
<script setup lang="ts"></script>
