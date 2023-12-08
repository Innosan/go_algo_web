<script setup lang="ts"></script>

<template>
	<div class="flex gap-12 flex-col">
		<p class="w-4/5 text-4xl font-bold opacity-80">
			Мы предлагаем ряд сервисов, которые помогут вам максимально
			<u>эффективно</u>
			использовать ваши инвестиции.
		</p>
		<div class="flex gap-8 flex-wrap">
			<NuxtLink
				v-for="service in services"
				class="card flex flex-col border rounded-2xl p-5 gap-4"
				:to="service.link"
			>
				<PageHeading :icon="service.icon" :title="service.title" />
				<p class="w-80">{{ service.description }}</p>
			</NuxtLink>
		</div>

		<p class="w-4/5 text-3xl font-bold opacity-70">
			Наши услуги разработаны для того, чтобы предоставить вам ценные
			знания и помочь <u>вам максимизировать свою прибыль</u>. Свяжитесь с
			нами для получения дополнительной информации.
		</p>
	</div>
</template>

<style scoped lang="scss">
.card {
	opacity: 0.7;
	transition: 0.3s;

	&:hover {
		border: 1px solid #cc6b6b;
		transform: translateY(-5px) scale(1.05);
		opacity: 1;
	}
}
</style>
