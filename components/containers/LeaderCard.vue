<script setup lang="ts">
const props = defineProps({
	leader: Object,
});
</script>

<template>
	<div
		class="flex flex-row gap-2 p-3 border-2 rounded-xl hover:border-b-red-400 transition-all"
	>
		<div>
			<CardHeading :heading="leader.ticker" icon="ui/ic_ticker" />
			<CardHeading
				:heading="leader.timeframe + ' дней'"
				icon="ui/ic_timeframe"
			/>
		</div>
		<div>
			<p>{{ leader.predict_price }}</p>
			<p
				:class="
					leader.predict_profit < 0
						? 'text-red-400'
						: 'text-green-400'
				"
			>
				{{
					leader.predict_profit !== 0
						? (leader.predict_profit * 100).toFixed(3)
						: leader.predict_profit
				}}
				%
			</p>
		</div>
	</div>
</template>

<style scoped></style>
