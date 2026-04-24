<template>
  <article
    class="rounded-card border border-outline-variant bg-surface-lowest px-4 py-6 shadow-row"
  >
    <div class="mb-4 flex items-center justify-between gap-3">
      <p class="m-0 text-base font-medium leading-6 text-on-surface">
        Cash Available to Trade
      </p>

      <UiPill label="Last 90 days" />
    </div>

    <ClientOnly>
      <div class="h-[260px] min-w-0">
        <Line
          :data="chartData"
          :options="chartOptions"
          :plugins="[chartAreaBorder]"
        />
      </div>
    </ClientOnly>
  </article>
</template>

<script setup lang="ts">
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
  type ScriptableScaleContext,
} from "chart.js";
import { Line } from "vue-chartjs";
import type { ChartPoint } from "~/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

const { isDark } = useTheme();

const tickFont = { family: "Inter", size: 12, weight: "normal" } as const;

const chartAreaBorder = {
  id: "chartAreaBorder",
  beforeDatasetsDraw(chart: ChartJS) {
    const {
      ctx,
      chartArea: { left, top, right, bottom },
    } = chart;
    ctx.save();
    ctx.strokeStyle = isDark.value
      ? "rgba(69, 70, 79, 0.5)"
      : "rgba(198, 197, 208, 0.5)";
    ctx.lineWidth = 1;
    ctx.strokeRect(left, top, right - left, bottom - top);
    ctx.restore();
  },
};

interface Props {
  points: ChartPoint[];
}

const props = defineProps<Props>();
const lastPointIndex = computed(() => Math.max(props.points.length - 1, 0));

const chartData = computed<ChartData<"line">>(() => {
  const lineColor = isDark.value ? "#BAC3FF" : "#1C40BE";
  return {
    labels: props.points.map((point) => point.label),
    datasets: [
      {
        label: "Cash Available to Trade",
        data: props.points.map((point) => point.value),
        borderColor: lineColor,
        borderWidth: 1.5,
        tension: 0,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 4,
        pointHitRadius: 18,
        pointBackgroundColor: lineColor,
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        backgroundColor: isDark.value
          ? "rgba(186, 195, 255, 0.12)"
          : "rgba(105, 114, 248, 0.18)",
      },
    ],
  };
});

const chartOptions = computed<ChartOptions<"line">>(() => {
  const gridColor = isDark.value ? "#2B2930" : "#E5E7EB";
  const tickColor = isDark.value ? "#8F909A" : "#4A5565";
  const tooltipBg = isDark.value ? "#1D1B20" : "#FFFFFF";
  const tooltipBorder = isDark.value ? "#45464F" : "#C6C5D0";
  const tooltipTitle = isDark.value ? "#E2E2E9" : "#1B1B21";
  const tooltipBody = isDark.value ? "#C5C6D0" : "#45464F";

  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    layout: {
      padding: {
        top: 4,
        right: 2,
        bottom: 0,
        left: 0,
      },
    },
    elements: {
      point: {
        hoverBorderWidth: 3,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        backgroundColor: tooltipBg,
        borderColor: tooltipBorder,
        borderWidth: 1,
        padding: 12,
        cornerRadius: 12,
        titleColor: tooltipTitle,
        bodyColor: tooltipBody,
        titleFont: {
          family: "Plus Jakarta Sans",
          size: 12,
          weight: "bold",
        },
        bodyFont: {
          family: "Plus Jakarta Sans",
          size: 12,
        },
        callbacks: {
          title(items) {
            return items[0]?.label ?? "";
          },
          label(item) {
            return `$${Number(item.raw).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
    },
    scales: {
      x: {
        offset: false,
        border: {
          display: false,
        },
        grid: {
          display: true,
          color: (context: ScriptableScaleContext) => {
            const index = context.index;
            return index === 0 || index === lastPointIndex.value
              ? "transparent"
              : gridColor;
          },
          drawTicks: false,
          lineWidth: 1,
        },
        ticks: {
          color: tickColor,
          padding: 12,
          font: tickFont,
        },
      },
      y: {
        min: 0,
        max: 30000,
        ticks: {
          stepSize: 5000,
          color: tickColor,
          padding: 12,
          font: tickFont,
          callback(value) {
            return value === 0 ? "0" : `${Number(value) / 1000}K`;
          },
        },
        border: {
          display: false,
        },
        grid: {
          color: gridColor,
          drawTicks: false,
          lineWidth: 1,
        },
      },
    },
  };
});
</script>
