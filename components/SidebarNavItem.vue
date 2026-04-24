<template>
  <button
    type="button"
    class="group flex w-full items-center gap-3 rounded-tile px-2 py-1.5 text-left font-sans text-sm font-medium leading-5 tracking-label transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-value/30 lg:flex-col lg:items-center lg:justify-center lg:gap-1 lg:px-1 lg:py-2 lg:text-center lg:text-xs lg:leading-4 lg:tracking-body"
    :aria-current="active ? 'page' : undefined"
    @click="$emit('select', item)"
  >
    <span
      :class="[
        'inline-flex h-8 w-14 shrink-0 items-center justify-center rounded-pill transition-colors duration-150',
        active
          ? 'bg-primary-container'
          : 'bg-transparent group-hover:bg-surface-high',
      ]"
    >
      <img :src="item.icon" alt="" aria-hidden="true" class="block h-5 w-5 dark:invert" />
    </span>
    <span
      :class="[
        'truncate transition-colors duration-150 lg:w-full',
        active
          ? 'font-semibold text-on-primary-container'
          : 'text-on-surface-variant group-hover:text-on-surface',
      ]"
    >
      {{ item.label }}
    </span>
  </button>
</template>

<script setup lang="ts">
import type { SidebarItem } from "~/data/navigation";

interface Props {
  item: SidebarItem;
  active?: boolean;
}

withDefaults(defineProps<Props>(), {
  active: false,
});

defineEmits<{
  select: [item: SidebarItem];
}>();
</script>
