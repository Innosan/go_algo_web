<script setup lang="ts">
const securitiesStore = useSecuritiesStore();
</script>

<template>
	<div class="flex gap-14 flex-col">
		<div class="flex flex-col gap-6">
			<h2 class="font-black text-3xl">Наш выбор</h2>
			<div class="flex gap-2 flex-wrap">
				<LeaderCard
					v-for="leader in securitiesStore.leaderboard
						.filter((v, i, a) => {
							return (
								a.findIndex((t) => t.ticker === v.ticker) === i
							);
						})
						.sort((a, b) => b.predict_profit - a.predict_profit)"
					:leader="leader"
				/>
			</div>
		</div>
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
					class="card border rounded-2xl p-5 gap-4 hover:translate-y-1"
					v-for="dev in developers"
					:dev="dev"
				/>
			</div>
		</div>
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
