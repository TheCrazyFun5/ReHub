<script>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },

  data() {
    return {
      chartData: {
        labels: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
        datasets: [
          {
            label: ["Часы"],
            data: [
              6, 6, 15, 18, 17, 7, 8, 12, 15, 15, 13, 5, 0, 20, 9, 19, 7, 2, 8, 10, 2, 13, 12, 11, 20, 20, 16, 3, 15, 8,
              5,
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        borderColor: "#114E6C",
        backgroundColor: "#114E6C",
      },
    };
  },
};
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<style></style>
