<template>
  <div class="flex h-10 w-full sm:w-auto">
    <button
      v-for="(option, index) in options"
      :key="option.value"
      type="button"
      class="relative -ml-px inline-flex flex-1 items-center justify-center gap-2 border border-outline px-3 py-1.5 text-sm font-medium leading-5 tracking-label transition-colors duration-150 first:ml-0 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-value/25 sm:w-[108px] sm:flex-none"
      :class="[
        index === 0 ? 'rounded-l-pill' : '',
        index === options.length - 1 ? 'rounded-r-pill' : '',
        option.value === modelValue
          ? 'z-[1] bg-secondary-container text-on-secondary-container'
          : 'text-on-surface hover:bg-surface-low',
      ]"
      :aria-pressed="option.value === modelValue"
      @click="$emit('update:modelValue', option.value)"
    >
      <svg
        v-if="option.value === modelValue"
        viewBox="0 0 16 16"
        class="h-[18px] w-[18px] shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3.5 8.25 6.5 11 12.5 5"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface SegmentedOption {
  label: string;
  value: string;
}

interface Props {
  modelValue: string;
  options: SegmentedOption[];
}

defineProps<Props>();

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>
