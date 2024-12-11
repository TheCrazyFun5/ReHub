<script>
import buttonCloseModal from "@/components/ui/buttonCloseModal.vue";
import blueBurron from "@/components/ui/blueButton.vue";
export default {
  components: {
    buttonCloseModal,
    blueBurron,
  },
  data() {
    return {
      error: false,
    };
  },
  props: {
    visibility: {
      type: Boolean,
      required: true,
    },
    nameUser: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
};
</script>

<template>
  <Teleport :disabled="!visibility" to="body">
    <div
      v-if="visibility"
      class="modalBC"
      @click.self="
        $emit('close');
        error = false;
      "
    >
      <div class="modal">
        <header>
          <buttonCloseModal
            @click="
              $emit('close');
              error = false;
            "
          />
        </header>
        <div v-if="!error" class="contentStart">
          <p>
            Михаил, вы хотите начать смену <span>{{ date }}</span> в <span>{{ time }}</span
            >?
          </p>
          <span>В случае если вы забудете закрыть смену, оплата за неё не будет произведена</span>
          <blueBurron @click="error = true">Начать</blueBurron>
        </div>
        <div v-else class="contentStart error">Технические шоколадки</div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.error {
  color: #ff155f;
}
.modalBC {
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--backgroundColorModal);
}
.modal {
  color: var(--MainColorText);
  max-width: 600px;
  width: 100%;
  padding: 20px 30px 45px 30px;
  border-radius: 20px;
  background-color: var(--backgroundColorModalPanel);
  margin: auto auto;
  header {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin-bottom: 15px;
  }
}
.contentStart {
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    line-height: 40px;
    font-size: 36px;
    margin-bottom: 23px;
    font-weight: 400;
    > span {
      text-decoration: underline;
    }
  }
  > span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    color: #ff155f;
    margin-bottom: 23px;
  }
}
</style>
