<script>
import buttonCloseModal from "@/components/ui/buttonCloseModal.vue";
import iconProfile from "@/assets/img/iconProfile.vue";
import blueButton from "@/components/ui/blueButton.vue";
import axios from "axios";
export default {
  components: {
    buttonCloseModal,
    iconProfile,
    blueButton,
  },
  data() {
    return {
      send: "",
      text: "",
    };
  },
  methods: {
    srndM() {
      axios
        .post("/api/user/IT", {
          data: this.text,
        })
        .then((response) => {
          this.send = response.data;
          this.text = "";
        })
        .catch((error) => {
          console.log(error);
          this.send = error;
        });
      console.log(this.text);
    },
  },
  props: {
    visibility: {
      type: Boolean,
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
        send = '';
      "
    >
      <div class="modal">
        <header class="modal__header">
          <div class="title"><iconProfile /> Обращение в IT-отдел</div>
          <buttonCloseModal
            @click="
              $emit('close');
              send = '';
            "
          />
        </header>
        <hr />
        <main v-if="send.length === 0" class="modal__main">
          <h6>Опишите вашу проблему.</h6>
          <textarea v-model="text"></textarea>
          <blueButton @click="srndM()">Отправить</blueButton>
        </main>
        <main v-else class="modal__main">
          <h6>{{ send }}</h6>
        </main>
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
  min-width: 600px;
  padding: 41px;
  border-radius: 20px;
  background-color: var(--backgroundColorModalPanel);
  margin: auto auto;
  > hr {
    margin-top: 28px;
    position: relative;
    left: -41px;
    width: calc(100% + 82px);
    border: 0px;
    border-top: 1px solid #7c7c7c;
  }
  .modal__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .title {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 15px;
      font-size: 1.2dvw;
    }
  }
  .modal__main {
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    > h6 {
      color: #7c7c7c;
      font-size: 1.2dvw;
      margin-bottom: 20px;
    }
    > textarea {
      width: 500px;
      height: 261px;
      resize: none;
      outline: none;
      padding: 0px;
      border: 1px solid #7c7c7c;
      background-color: transparent;
      overflow: auto;
      border-radius: 20px;
      padding: 10px;
      margin-bottom: 40px;
    }
  }
}
</style>
