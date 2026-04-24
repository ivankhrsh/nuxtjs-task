<template>
  <header
    class="sticky top-0 z-50 flex h-12 items-center justify-between px-4 transition-[background-color,backdrop-filter] duration-300 sm:px-5"
    :class="scrolled
      ? 'bg-header-bg/85 backdrop-blur-md'
      : 'bg-header-bg'"
  >
    <div class="flex items-center gap-2">
      <slot name="leading" />
      <NuxtLink to="/" class="no-underline" aria-label="SageTrader home">
        <AppBrand />
      </NuxtLink>
    </div>

    <div v-if="$slots.actions" class="flex items-center gap-4">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
