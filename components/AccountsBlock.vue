<template>
  <article class="flex flex-col gap-2">
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-tile bg-surface-high">
          <img :src="block.icon" alt="" class="h-5 w-5 dark:invert" aria-hidden="true" />
        </div>

        <div class="flex min-w-0 flex-1 flex-col gap-1">
          <h3 class="m-0 text-sm font-semibold leading-5 tracking-[0.1px] text-on-surface">
            {{ block.title }}
          </h3>
          <p class="m-0 text-xs xl:text-sm font-normal leading-5 tracking-[0.15px] text-on-surface-variant">
            {{ block.subtitle }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="account in block.accounts"
          :key="account.id"
          class="flex items-center justify-between rounded-row border border-outline-variant bg-surface-lowest py-3 pl-4 pr-6 shadow-row"
        >
          <div class="flex min-w-0 items-center gap-4">
            <div class="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-primary-value text-xs font-medium leading-4 tracking-[0.15px] text-white dark:text-primary-container">
              {{ account.initial }}
            </div>
            <p class="m-0 truncate text-sm font-medium leading-5 tracking-[0.1px] text-on-surface">
              {{ account.bankName }}
            </p>
          </div>
          <p class="m-0 shrink-0 text-sm font-medium leading-5 tracking-[0.1px] text-on-surface">
            {{ account.maskedNumber }}
          </p>
        </div>  
      </div>
    </div>

    <button
      type="button"
      class="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium leading-5 tracking-[0.1px] text-primary-value transition-colors duration-150 hover:bg-primary-value/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-value/25"
    >
      <span class="block h-3 w-3 shrink-0 bg-current [mask-image:url(/icons/plus.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" aria-hidden="true" />
      {{ block.ctaLabel }}
    </button>
  </article>
</template>

<script setup lang="ts">
import type { AccountBlock } from "~/types";

interface Props {
  block: AccountBlock;
}

defineProps<Props>();
</script>
