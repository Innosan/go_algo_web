<script setup lang="ts">
import AppLogo from "~/components/AppLogo.vue";
</script>

<template>
	<header class="flex flex-row gap-4 items-center">
		<AppLogo />
		<nav>
			<ul>
				<li>
					<HeaderItem navigate-to="/" title="Стратегии" />
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped></style>
