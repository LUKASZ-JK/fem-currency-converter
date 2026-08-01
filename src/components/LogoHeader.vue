<script setup lang="ts">
const dotBefore = "before:content-['·'] before:mx-2 first:before:content-none"

defineProps<{
  supportedCount: number
}>()
</script>

<template>
  <header class="flex w-full items-center p-6">
    <img src="@/assets/images/logo.svg" alt="FX Checker" />
    <!-- Dynamic: number of available currencies, e.g. "55" -->
    <ul class="text-preset-4 mr-0 ml-auto flex items-center text-neutral-200">
      <li :class="dotBefore">{{ supportedCount }} Currencies</li>
      <li :class="dotBefore">EOD</li>
      <li :class="dotBefore">ECB data</li>
    </ul>
  </header>
</template>
