<template>
  <component
    :is="tag"
    v-bind="extraAttrs"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-pill font-sans text-sm font-medium leading-5 tracking-[0.1px] no-underline transition-[background-color,border-color,color] duration-150 ease-out focus-visible:outline-none',
      variantClasses,
      fullWidth ? 'w-full' : '',
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type Variant = 'primary' | 'outlined' | 'outlined-inverse' | 'tonal';

interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  href: undefined,
  type: 'button',
  variant: 'primary',
  fullWidth: false,
});

const tag = computed(() => (props.href ? 'a' : 'button'));

const extraAttrs = computed(() =>
  props.href ? { href: props.href } : { type: props.type },
);

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-value text-white px-6 py-3.5 hover:bg-[#17369E] active:bg-[#142F8E] dark:text-[#1B2D88] dark:hover:bg-[#CAD0FF] dark:active:bg-[#BAC3FF]';
    case 'outlined':
      return 'border border-outline-variant bg-transparent text-on-surface-variant px-5 py-2.5 hover:border-outline hover:bg-surface-low hover:text-on-surface';
    case 'outlined-inverse':
      return 'border border-white/30 bg-transparent text-white px-5 py-2 hover:border-white hover:bg-white/10';
    case 'tonal':
      return 'bg-primary-container text-on-primary-container px-5 py-2.5 hover:bg-[#C8CFFD] dark:hover:bg-[#2E4290]';
    default:
      return '';
  }
});
</script>
