<template>
  <component
    :is="props.as"
    :type="props.as === 'button' ? type : undefined"
    :class="[
      'inline-flex min-h-6 items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium leading-5 tracking-label transition-colors duration-150',
      variantClasses,
      props.as === 'button'
        ? 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-value/25'
        : '',
    ]"
  >
    {{ label }}
  </component>
</template>

<script setup lang="ts">
type PillVariant = "neutral" | "outlined";
type PillTag = "button" | "span";

interface Props {
  label: string;
  variant?: PillVariant;
  as?: PillTag;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "neutral",
  as: "button",
  type: "button",
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "outlined":
      return "border border-outline-variant bg-surface-lowest text-on-surface-variant hover:bg-surface-low";
    case "neutral":
    default:
      return "bg-surface-low text-on-surface-variant hover:bg-surface-high hover:text-on-surface-variant";
  }
});
</script>
