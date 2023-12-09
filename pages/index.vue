<script setup lang="ts">
import LeaderBoard from "~/components/LeaderBoard.vue";
</script>

<template>
	<div class="flex gap-14 flex-col">
		<LeaderBoard />
		<div class="flex flex-col gap-6">
			<p class="text-3xl font-black">Сервисы</p>
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
				знания и помочь <u>вам максимизировать свою прибыль</u>.
				Свяжитесь с нами для получения дополнительной информации.
			</p>
		</div>

		<div class="flex flex-col gap-7">
			<p class="text-3xl font-black">Разработчики</p>
			<div class="flex flex-row gap-6 flex-wrap">
				<DevCard
					class="border rounded-2xl p-5 gap-4"
					v-for="dev in developers"
					:dev="dev"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	opacity: 1;
	transition: 0.3s;

	&:hover {
		border: 1px solid #cc6b6b;
		transform: translateY(-5px) scale(1.05);
		opacity: 1;
	}
}
</style>
