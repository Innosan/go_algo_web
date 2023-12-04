<script setup lang="ts">
const emit = defineEmits(["input"]);
const props = defineProps({
	type: {
		type: String,
		default: "text",
	},
	title: {
		type: String,
	},
	placeholder: {
		type: String,
		default: "Type something...",
	},
	id: {
		type: Number,
	},
});

const value = ref("");

const handleInput = () => {
	emit("input", {
		input: value,
	});
};
</script>

<template>
	<div class="flex flex-col gap-3">
		<label :for="id" class="text-2xl font-bold">{{ title }}</label>
		<input
			v-model="value"
			@input="handleInput"
			:type="type"
			:placeholder="placeholder"
			:id="id"
			class="p-2 border-b-2 w-1/2 rounded-xl"
		/>
	</div>
</template>

<style scoped></style>
