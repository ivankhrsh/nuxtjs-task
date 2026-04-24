<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// Inline script runs synchronously in <head> before first paint, preventing
// the white flash when a user has dark mode saved in localStorage.
useHead({
  script: [
    {
      innerHTML: `(function(){try{var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&d))document.documentElement.classList.add('dark')}catch(e){}})()`,
      tagPosition: 'head',
    },
  ],
})

const { init } = useTheme()
onMounted(init)
</script>
