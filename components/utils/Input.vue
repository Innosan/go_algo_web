<script setup lang="ts">
const emit = defineEmits(["input"]);
export const props = defineProps({
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
		input: props.id,
	});
};
</script>

<template>
	<label :for="id">{{ title }}</label>
	<input
		v-model="value"
		@input="handleInput"
		:type="type"
		:placeholder="placeholder"
		:id="id"
	/>
</template>

<style scoped></style>
