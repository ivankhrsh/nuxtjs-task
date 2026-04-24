<template>
  <div class="flex min-h-screen flex-col bg-surface font-sans text-on-surface">
    <AppHeader>
      <template #leading>
        <SidebarToggle
          v-model:open="sidebarOpen"
          controls="money-transfer-sidebar"
        />
      </template>
      <template #actions>
        <ThemeToggle />
        <UserMenu
          :name="user?.name"
          :email="user?.email"
          :image="user?.picture"
        />
      </template>
    </AppHeader>

    <div class="flex flex-1 items-stretch">
      <AppSidebar
        id="money-transfer-sidebar"
        v-model:open="sidebarOpen"
        :main="sidebarMain"
        :secondary="sidebarSecondary"
      />

      <main class="min-w-0 flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-4">
        <div class="flex w-full max-w-[1016px] flex-col">
          <section class="border-b border-outline-variant/80 pb-4 md:pb-5">
            <div
              class="flex flex-col gap-4 md:flex-row md:items-center md:gap-8"
            >
              <h1 class="m-0 text-2xl font-medium leading-8 text-on-surface">
                Money Transfers
              </h1>

              <div class="w-full md:w-auto">
                <NavTabs />
              </div>
            </div>
          </section>

          <section class="mt-10 flex flex-col gap-6">
            <h2 class="m-0 text-[22px] font-medium leading-7 text-on-surface">
              Account Balance
            </h2>

            <BalanceChart :points="balanceWeekly" />
          </section>

          <section class="mt-20 flex flex-col gap-6">
            <h2 class="m-0 text-[22px] font-medium leading-7 text-on-surface">
              Connected Accounts
            </h2>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <AccountsBlock
                v-for="block in accountBlocks"
                :key="block.kind"
                :block="block"
              />
            </div>
          </section>

          <section class="mt-24 flex flex-col gap-6 pb-6 sm:pb-8">
            <h2 class="m-0 text-[22px] font-medium leading-7 text-on-surface">
              Recent Transfers
            </h2>

            <TransfersTable
              :rows="filteredTransfers"
              :active-filter="activeTransferFilter"
              @update:filter="activeTransferFilter = $event"
            />
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { accountBlocks } from "~/data/accounts";
import { balanceWeekly } from "~/data/chart";
import { sidebarMain, sidebarSecondary } from "~/data/navigation";
import { transfers } from "~/data/transfers";
import type { TransferFilter } from "~/types";

definePageMeta({
  middleware: "auth",
});

const user = useUser();
const sidebarOpen = ref(false);
const activeTransferFilter = ref<TransferFilter>("all");

const filteredTransfers = computed(() => {
  if (activeTransferFilter.value === "all") {
    return transfers;
  }

  return transfers.filter(
    (transfer) => transfer.method.toLowerCase() === activeTransferFilter.value,
  );
});
</script>
