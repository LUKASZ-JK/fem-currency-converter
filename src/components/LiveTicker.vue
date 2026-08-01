<script setup lang="ts">
import { type CurrencyCode } from '@/types/types'

const MAJOR_TICKER_CURRENCY_CODES: CurrencyCode[] = ['USD', 'GBP', 'EUR', 'JPY', 'CHF']
</script>

<template>
  <div class="w-full">
    <div class="bg-lime-500 px-6 py-2">
      <h2 class="text-preset-5-medium text-neutral-900 uppercase">Live markets</h2>
    </div>
    <div></div>
  </div>
</template>
