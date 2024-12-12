<script>
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "chart.js/auto"; // Импортируем все типы диаграмм

export default {
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            data: [10350, 3250, 10000],
            backgroundColor: ["rgba(64, 255, 159, 100)", "rgba(255, 100, 53, 100)", "rgba(253, 240, 119, 100)"],
            hoverOffset: 4,
          },
        ],
      },
      chartOptions: {
        cutout: "50%",
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    const ctx = this.$refs.myChart.getContext("2d");
    new Chart(ctx, {
      type: "doughnut", // Важно: указываем тип диаграммы
      data: this.chartData,
      options: this.chartOptions,
    });
  },
};
</script>

<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<style>
canvas {
  margin: auto auto;
}
</style>
