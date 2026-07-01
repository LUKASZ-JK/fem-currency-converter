<script setup lang="ts"></script>

<template>
  <header>
    <img src="@/assets/images/logo.svg" alt="FX Checker" />
    <!-- Dynamic: number of available currencies, e.g. "55" -->
    <div class="text-preset-4">
      <span>55 Currencies</span>
      <span>EOD</span>
      <span>ECB data</span>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
}
div {
  color: var(--neutral-200);
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: -0.5rem;
}
span {
  display: block;
  margin-right: 0.5rem;
}
span + span::before {
  content: '·';
  margin-right: 0.5rem;
}
</style>
