<script setup>
import { vAutoAnimate } from "@formkit/auto-animate";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<template>
	<TabGroup>
		<TabList class="flex gap-4">
			<Tab as="template" v-slot="{ selected }">
				<button
					:class="{
						'bg-blue-500 text-white': selected,
						'bg-white text-black': !selected,
					}"
				>
					Идеальная торговля
				</button>
			</Tab>
			<Tab as="template" v-slot="{ selected }">
				<button
					:class="{
						'bg-blue-500 text-white': selected,
						'bg-white text-black': !selected,
					}"
				>
					Нейронная торговля
				</button>
			</Tab>
		</TabList>
		<TabPanels v-auto-animate>
			<TabPanel key="tab1">
				<slot name="ideal"></slot>
			</TabPanel>
			<TabPanel key="tab2">
				<slot name="neural"></slot>
			</TabPanel>
		</TabPanels>
	</TabGroup>
</template>

<style scoped lang="scss">
button {
	border: 1px solid rgba(0, 0, 0, 0);

	&:hover {
		border: 1px solid rgba(0, 0, 0, 0.4);
	}
}
</style>
