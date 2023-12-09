<script setup lang="ts">
const securitiesStore = useSecuritiesStore();
</script>

<template>
	<div class="grid gap-4">
		<p class="text-2xl font-black">Высокий потенциал роста</p>
		<Tabs
			as="div"
			first-tab-title="На один день"
			second-tab-title="На 5 дней"
		>
			<template #tab1>
				<div class="flex gap-4 flex-wrap">
					<LeaderCard
						v-for="leader in securitiesStore.getSortedLeaderboard(
							'1',
						)"
						:leader="leader"
					/>
				</div>
			</template>
			<template #tab2>
				<div class="flex gap-4 flex-wrap">
					<LeaderCard
						v-for="leader in securitiesStore.getSortedLeaderboard(
							'5',
						)"
						:leader="leader"
					/>
				</div>
			</template>
		</Tabs>
	</div>
</template>
