<template>
  <transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/40 lg:hidden"
      aria-hidden="true"
      @click="close"
    />
  </transition>

  <aside
    :class="[
      'fixed bottom-0 left-0 top-12 z-50 flex w-[260px] shrink-0 flex-col bg-surface-low shadow-card-light-lg transition-transform duration-200 ease-out',
      'border-r border-outline-variant',
      'lg:sticky lg:top-12 lg:z-20 lg:h-[calc(100vh-48px)] lg:w-[112px] lg:translate-x-0 lg:self-start lg:shadow-none lg:transition-none ',
      open ? 'translate-x-0' : '-translate-x-full',
    ]"
    :id="id"
    aria-label="Primary navigation"
    @keydown.esc="close"
  >
    <nav class="flex h-full flex-col gap-1 overflow-y-auto px-3 py-4 lg:p-4 lg:pb-6">
      <ul class="flex flex-col gap-1.5 lg:gap-4">
        <li v-for="item in main" :key="item.label">
          <SidebarNavItem
            :item="item"
            :enabled="item.enabled"
            :active="isActive(item)"
            @select="onSelect"
          />
        </li>
      </ul>

      <ul class="mt-auto flex flex-col gap-1.5">
        <li v-for="item in secondary" :key="item.label">
          <SidebarNavItem
            :item="item"
            :active="isActive(item)"
            @select="onSelect"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { SidebarItem } from "~/data/navigation";

interface Props {
  id?: string;
  main: SidebarItem[];
  secondary?: SidebarItem[];
  open?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: undefined,
  secondary: () => [],
  open: false,
});

const emit = defineEmits<{
  "update:open": [value: boolean];
  select: [item: SidebarItem];
}>();

function close() {
  emit("update:open", false);
}

function onSelect(item: SidebarItem) {
  emit("select", item);
  close();
}

const route = useRoute();
const isActive = (item: SidebarItem) => {
  return route.path === item.to;
};

watch(
  () => props.open,
  (isOpen) => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
  },
);

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});
</script>
