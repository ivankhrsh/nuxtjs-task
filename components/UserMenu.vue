<template>
  <div ref="rootRef" class="relative">
    <button
      type="button"
      :class="[
        'flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary-value text-sm font-semibold uppercase leading-none text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
        open ? 'ring-2 ring-white/40 pointer-events-none' : 'hover:ring-2 hover:ring-white/20',
      ]"
      aria-haspopup="menu"
      :aria-expanded="open"
      :aria-label="triggerLabel"
      @click="toggle"
    >
      <img
        v-if="image"
        :src="image"
        :alt="displayName"
        class="h-full w-full object-cover"
        referrerpolicy="no-referrer"
        @error="imageFailed = true"
      />
      <span v-else>{{ initial }}</span>
    </button>

    <transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="open"
        role="menu"
        :aria-label="triggerLabel"
        class="absolute right-0 top-full z-20 mt-2 min-w-[160px] overflow-hidden rounded-tile bg-surface-lowest py-1 border border-outline-variant shadow-card-light"
      >
        <a
          :href="logoutHref"
          role="menuitem"
          class="block mx-1 rounded-tile px-4 py-2 text-sm text-on-surface transition-colors hover:bg-surface-low focus-visible:bg-surface-low focus-visible:outline-none"
          @click="close"
        >
          Log Out
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name?: string;
  email?: string;
  image?: string;
  logoutHref?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  email: '',
  image: '',
  logoutHref: '/auth/logout',
});

const open = ref(false);
const imageFailed = ref(false);
const rootRef = ref<HTMLElement | null>(null);

const image = computed(() =>
  props.image && !imageFailed.value ? props.image : '',
);

const displayName = computed(
  () => props.name || props.email || 'Account',
);

const initial = computed(() => {
  const source = (props.name || props.email || '').trim();
  return source ? source.charAt(0).toUpperCase() : '?';
});

const triggerLabel = computed(() => `${displayName.value} menu`);

function toggle() {
  open.value = !open.value;
}

function close() {
  open.value = false;
}

function onDocumentClick(event: MouseEvent) {
  if (!open.value) return;
  const target = event.target as Node | null;
  if (rootRef.value && target && !rootRef.value.contains(target)) {
    close();
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    close();
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onKeydown);
});
</script>
