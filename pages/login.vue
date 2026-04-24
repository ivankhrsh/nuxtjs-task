<template>
  <div class="flex min-h-screen flex-col bg-surface font-sans">
    <header class="flex h-12 items-center justify-between gap-2 bg-header-bg px-5">
      <AppBrand />
      <ThemeToggle />
    </header>

    <div class="flex flex-1 items-center justify-center px-4 py-12">
      <div
        class="w-full max-w-[400px] rounded-card border border-outline-variant bg-surface-lowest p-8 shadow-card-light"
      >
        <div class="mb-8 flex flex-col gap-1">
          <h1 class="m-0 text-[22px] font-medium leading-7 text-on-surface">
            Welcome to SageTrader!
          </h1>
          <p
            class="m-0 text-sm leading-5 tracking-[0.15px] text-on-surface-variant"
          >
            Sign in to get started
          </p>
        </div>

        <UiButton :fullWidth="true" variant="primary" @click="signIn">
          Sign In
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useUser();

if (user.value) {
  await navigateTo("/overview", { replace: true });
}

function signIn() {
  navigateTo("/auth/login", { external: true });
}
</script>
