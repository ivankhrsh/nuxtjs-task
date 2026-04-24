<template>
  <article class="rounded-card border border-outline-variant bg-surface-lowest p-4">
    <div class="mb-4 flex items-center justify-between gap-3">
      <div class="min-w-0 flex-1 sm:flex-none">
        <UiSegmentedControl
          :model-value="activeFilter"
          :options="filterOptions"
          @update:model-value="$emit('update:filter', $event as TransferFilter)"
        />
      </div>
      <UiPill label="Last 7 Days" as="button" class="shrink-0" />
    </div>

    <div class="overflow-hidden rounded-row bg-portal-primary-light-100 px-2">
      <div class="hidden overflow-x-auto sm:block">
        <div class="min-w-[820px]">
          <div
            class="grid grid-cols-[152px_1fr_1fr_1fr_1fr_180px] items-center gap-8 px-4 py-2.5 text-sm font-medium tracking-label text-on-surface-variant"
            :class="{ 'border-b border-outline-variant': !formattedRows.length }"
          >
            <span>Date</span>
            <span>Type</span>
            <span>Method</span>
            <span>Account</span>
            <span class="text-right">Amount ($)</span>
            <span class="text-center">Status</span>
          </div>

          <div
            v-for="transfer in formattedRows"
            :key="transfer.id"
            class="grid grid-cols-[152px_1fr_1fr_1fr_1fr_180px] items-center gap-8 border-t border-outline-variant px-4 py-[18px]"
          >
            <div class="flex items-center gap-2 text-sm leading-5">
              <span class="whitespace-nowrap font-medium tracking-label text-on-surface">{{ transfer.date }}</span>
              <span class="whitespace-nowrap tracking-body text-on-surface-variant">{{ transfer.time }}</span>
            </div>
            <span class="text-sm leading-5 tracking-body text-on-surface">{{ transfer.type }}</span>
            <span class="text-sm leading-5 tracking-body text-on-surface">{{ transfer.method }}</span>
            <span class="font-nums text-label tracking-body text-on-surface">{{ transfer.accountMasked }}</span>
            <span class="font-nums text-right text-label font-medium leading-5 tracking-label text-on-surface">{{ transfer.amount }}</span>
            <div class="flex justify-center">
              <span
                class="inline-flex rounded px-2 py-[2px] text-xs font-medium leading-4 tracking-body"
                :class="statusClasses[transfer.status]"
              >
                {{ transfer.statusLabel }}
              </span>
            </div>
          </div>

        </div>
      </div>

      <div class="flex flex-col sm:hidden">
        <div
          v-for="transfer in formattedRows"
          :key="transfer.id"
          class="border-t border-outline-variant px-4 py-[18px] first:border-t-0"
        >
          <div class="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-[10px] text-sm leading-5">
            <span class="tracking-label text-on-surface-variant">Date</span>
            <div class="flex items-center gap-2">
              <span class="font-medium tracking-label text-on-surface">{{ transfer.date }}</span>
              <span class="tracking-body text-on-surface-variant">{{ transfer.time }}</span>
            </div>
            <span class="tracking-label text-on-surface-variant">Type</span>
            <span class="tracking-body text-on-surface">{{ transfer.type }}</span>
            <span class="tracking-label text-on-surface-variant">Method</span>
            <span class="tracking-body text-on-surface">{{ transfer.method }}</span>
            <span class="tracking-label text-on-surface-variant">Account</span>
            <span class="font-nums text-label tracking-body text-on-surface">{{ transfer.accountMasked }}</span>
            <span class="tracking-label text-on-surface-variant">Amount ($)</span>
            <span class="font-nums text-label font-medium tracking-label text-on-surface">{{ transfer.amount }}</span>
            <span class="tracking-label text-on-surface-variant">Status</span>
            <span>
              <span
                class="inline-flex rounded px-2 py-[2px] text-xs font-medium leading-4 tracking-body"
                :class="statusClasses[transfer.status]"
              >
                {{ transfer.statusLabel }}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div v-if="!formattedRows.length" class="flex flex-col items-center gap-3 py-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="shrink-0 text-outline" aria-hidden="true">
          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="currentColor"/>
          <path d="M15.71 15.93C15.58 15.93 15.45 15.9 15.33 15.82L12.23 13.97C11.46 13.51 10.89 12.5 10.89 11.61V7.51C10.89 7.1 11.23 6.76 11.64 6.76C12.05 6.76 12.39 7.1 12.39 7.51V11.61C12.39 11.97 12.69 12.5 13 12.68L16.1 14.53C16.46 14.74 16.57 15.2 16.36 15.56C16.21 15.8 15.96 15.93 15.71 15.93Z" fill="currentColor"/>
        </svg>
        <p class="m-0 text-center text-sm leading-5 tracking-body text-on-surface-variant">
          You don't have any recent transfers yet.
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatAmount, formatDate } from "~/utils/format";
import type { Transfer, TransferFilter, TransferStatus } from "~/types";

interface Props {
  rows: Transfer[];
  activeFilter: TransferFilter;
}

const props = defineProps<Props>();

defineEmits<{
  "update:filter": [value: TransferFilter];
}>();

const filterOptions: Array<{ label: string; value: TransferFilter }> = [
  { label: "All", value: "all" },
  { label: "Wire", value: "wire" },
  { label: "ACH", value: "ach" },
];

const formattedRows = computed(() =>
  props.rows.map((transfer) => {
    const { date, time } = formatDate(transfer.timestamp);
    return {
      ...transfer,
      date,
      time,
      amount: formatAmount(transfer.amount),
      statusLabel: transfer.status.charAt(0).toUpperCase() + transfer.status.slice(1),
    };
  }),
);

const statusClasses: Record<TransferStatus, string> = {
  pending: "border border-outline-variant text-on-surface-variant",
  completed: "border border-transparent bg-status-completed-bg text-status-completed-ink",
  rejected: "border border-transparent bg-status-rejected-bg text-status-rejected-ink",
};
</script>
