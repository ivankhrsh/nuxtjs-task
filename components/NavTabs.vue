<template>
  <nav aria-label="Money transfer sections" class="w-full">
    <div class="flex flex-wrap gap-x-1 gap-y-2 sm:flex-nowrap sm:gap-1.5">
      <button
        v-for="tab in tabs"
        :key="tab.label"
        type="button"
        :aria-current="tab.label === activeTabLabel ? 'page' : undefined"
        class="inline-flex items-center justify-center rounded-[20px] px-3 py-1.5 text-sm leading-5 tracking-[0.1px] whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-value/25 sm:px-4 sm:py-[10px]"
        :class="
          tab.label === activeTabLabel
            ? 'bg-primary-value/10 font-semibold text-primary-value'
            : 'font-medium text-on-surface-variant hover:bg-surface-low hover:text-primary-value'
        "
      >
        {{ tab.label }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { headerTabs, type HeaderTab } from "~/data/navigation";

interface Props {
  tabs?: HeaderTab[];
  activeLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tabs: () => headerTabs,
  activeLabel: "Overview",
});

const route = useRoute();

const activeTabLabel = computed(
  () => props.tabs.find((t) => t.to === route.path)?.label ?? props.activeLabel,
);
</script>
