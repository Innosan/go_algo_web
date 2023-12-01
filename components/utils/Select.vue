<script setup>
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/vue";

const selectedTicker = ref(tickers[0]);
</script>

<template>
	<div>
		<Listbox v-model="selectedTicker">
			<div class="relative mt-1">
				<ListboxButton
					class="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
				>
					<span class="block truncate">{{
						selectedTicker.title
					}}</span>
					<span
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
					>
						<img
							src="~assets/icons/ui/ic_select.svg"
							alt="Выбрать"
						/>
					</span>
				</ListboxButton>

				<transition
					leave-active-class="transition duration-100 ease-in"
					leave-from-class="opacity-100"
					leave-to-class="opacity-0"
				>
					<ListboxOptions
						class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
					>
						<ListboxOption
							v-slot="{ active, selected }"
							v-for="ticker in tickers"
							:key="ticker.id"
							:value="ticker"
							as="template"
						>
							<li
								:class="[
									active
										? 'transition bg-amber-100 text-amber-900'
										: 'text-gray-900',
									'relative cursor-pointer p-4 select-none py-2',
								]"
							>
								<span
									:class="[
										selected ? 'font-bold' : 'font-normal',
										'block truncate',
									]"
									>{{ ticker.title }}</span
								>
							</li>
						</ListboxOption>
					</ListboxOptions>
				</transition>
			</div>
		</Listbox>
	</div>
</template>
