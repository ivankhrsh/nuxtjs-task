<template>
  <button
    type="button"
    class="-ml-1 inline-flex h-8 w-8 items-center justify-center rounded-tile text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:hidden"
    :aria-expanded="open"
    :aria-controls="controls"
    :aria-label="open ? 'Close navigation' : 'Open navigation'"
    @click="$emit('update:open', !open)"
  >
    <svg
      v-if="!open"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  </button>
</template>

<script setup lang="ts">
interface Props {
  open?: boolean;
  controls?: string;
}

withDefaults(defineProps<Props>(), {
  open: false,
  controls: undefined,
});

defineEmits<{
  'update:open': [value: boolean];
}>();
</script>
