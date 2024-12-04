<script>
import clos from "@/components/ui/buttonCloseModal.vue";
export default {
  components: {
    clos,
  },
  props: {
    open1: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ["close"],
};
</script>

<template>
  <Teleport :disabled="!open1" to="body">
    <div v-if="open1" class="modalBC" @click.self="$emit('close')">
      <div class="modal">
        <header class="modal__header">
          <h2>{{ data.title }}</h2>
          <clos />
          <button @click="$emit('close')">X</button>
        </header>
        <main v-html="data.maxText" class="modal__main"></main>
        <footer class="modal__footer">Дата публикации: {{ data.date }}</footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modalBC {
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--backgroundColorModal);
  top: 0;
}
.modal {
  color: var(--MainColorText);
  max-width: 993px;
  padding: 50px;
  border-radius: 20px;
  background-color: var(--backgroundColorModalPanel);
  margin: auto auto;
  .modal__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 48px;
      font-weight: 500;
    }
  }
}
.modal__main {
  margin-top: 56px;
  max-width: 800px;
  padding: 0px 46px;
  margin-bottom: 56px;
  font-size: 20px;
  font-weight: 400;
}
.modal__footer {
  text-align: end;
  font-size: 14px;
  font-weight: 400;
}
</style>
