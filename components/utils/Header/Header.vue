<script setup lang="ts"></script>

<template>
	<header class="flex flex-row gap-4 items-center">
		<AppLogo />
		<nav>
			<ul class="flex gap-4 font-bold">
				<li>
					<HeaderItem navigate-to="/" title="Стратегии" />
				</li>
				<li>
					<HeaderItem navigate-to="/about" title="О сервисе" />
				</li>
				<li>
					<HeaderItem navigate-to="/service" title="Сервисы" />
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped></style>
