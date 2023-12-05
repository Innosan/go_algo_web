<script setup lang="ts">
import { useSecuritiesStore } from "~/stores/securitiesStore";

const securities = useSecuritiesStore();

securities.fetchSecurities();
</script>

<template>
	<Header />
	<NuxtPage />
	<Footer />
</template>
