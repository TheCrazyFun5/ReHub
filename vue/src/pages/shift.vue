<script>
import ImgCalendar from "@/assets/img/imgCalendar.vue";
import ImgClock from "@/assets/img/imgClock.vue";
import blockAnalitick from "@/components/ui/blockAnalytics.vue";
import imgDollar from "@/assets/img/imgDollar.vue";
import imgGraf from "@/assets/img/imgGraf.vue";
import grafic from "@/components/ui/Grafic.vue";
import diagram from "@/components/ui/diagrama.vue";
export default {
  components: { blockAnalitick, ImgClock, ImgCalendar, imgGraf, imgDollar, grafic, diagram },
  data() {
    return {
      allShiftData: {
        allShift: {
          shiftSum: "10",
          shiftSumM: "2",
        },
        hourMonth: {
          hourSum: "72",
          hourSumM: "10",
        },
        salaryMonth: {
          salary: "100000",
          prize: "1000",
          recycling: "2350",
        },
      },
    };
  },
};
</script>

<template>
  <div>
    <h1 class="namePage">Аналитика смен</h1>
    <div class="pageShift">
      <div class="one">
        <div class="block1">
          <blockAnalitick
            textChange="Всего смен"
            :maininfoChange="allShiftData.allShift.shiftSum"
            :discriptChange="'Всего за месяц: ' + allShiftData.allShift.shiftSumM"
          >
            <ImgClock />
          </blockAnalitick>
          <blockAnalitick
            textChange="Часов за месяц"
            :maininfoChange="allShiftData.hourMonth.hourSum"
            :discriptChange="'Всего за неделю: ' + allShiftData.hourMonth.hourSumM"
            ><ImgCalendar
          /></blockAnalitick>
        </div>
        <div class="block3">
          <div class="conten">
            <h1>График отработанных смен</h1>
            <imgGraf />
          </div>
          <h3 class="hh3">За текущий месяц:</h3>
          <grafic />
        </div>
      </div>
      <div class="block2">
        <div class="content2">
          <h1>Заработная плата</h1>
          <imgDollar />
        </div>
        <div class="dopContent">
          <div>
            <h2>Оклад</h2>
            <div class="money">
              <img src="../assets/img/green.svg" alt="" />
              <h3>{{ allShiftData.salaryMonth.salary }}</h3>
            </div>
          </div>

          <div>
            <h2>Премия</h2>
            <div class="money">
              <img src="../assets/img/yelow.svg" alt="" />
              <h3>{{ allShiftData.salaryMonth.prize }}</h3>
            </div>
          </div>

          <div>
            <h2>Переработки</h2>
            <div class="money">
              <img src="../assets/img/red.svg" alt="" />
              <h3>{{ allShiftData.salaryMonth.recycling }}</h3>
            </div>
          </div>
        </div>
        <div>
          <diagram />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.one {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.money {
  display: flex;
  margin-top: 10px;
  gap: 10px;
  > h3 {
    font-size: 25px;
  }
}
.dopContent {
  display: flex;
  gap: 50px;
  > div > h2 {
    font-size: 30px;
    margin-top: 10px;
  }
}

.block2 {
  max-width: 615px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-right: 6px;
  padding: 30px 30px 30px 38px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  -moz-box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  > .content2 {
    display: flex;
    justify-content: space-between;
  }
  > img {
    max-width: 300px;
    margin: auto auto;
  }
}
.hh3 {
  font-size: 12px;
  color: #7c7c7c;
  margin-top: 10px;
}
.pageShift {
  display: flex;
  flex-direction: row;
  gap: 30px;
  grid-template-columns: auto auto;
  grid-auto-flow: column dense;
}
h1 {
  font-size: 40px;
  color: var(--MainColorText);
}
.namePage {
  font-size: 48px;
  margin-bottom: 10px;
  color: var(--MainColorText);
}

.block1 {
  display: flex;
  gap: 30px;
  margin-left: 6px;
}
.block3 {
  max-width: 830px;
  max-height: 792px;
  margin-left: 6px;
  background-color: transparent;
  padding: 30px 30px 30px 43px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  -moz-box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  box-shadow: 0px 0px 8px 2px rgba(124, 124, 124, 0.2);
  > .conten {
    display: flex;
    justify-content: space-between;
  }
  > img {
    margin-top: 15px;
  }
}
</style>
