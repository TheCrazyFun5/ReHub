<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: "UserName",
    },
    paceholder: {
      type: String,
      required: false,
      default: "Ты что еблан? Мне нужны аргументы",
    },
  },
  emits: ["hop"],
  data() {
    return {
      error: false,
      errorText: "",
      activ: false,
    };
  },
  methods: {
    text(value) {
      this.error = false;
      this.errorText = "";
      if (value.length >= 1) {
        this.activ = true;
      } else {
        this.activ = false;
      }

      if (this.id === "UserName") {
        if (value.length < 3 && value.length > 0) {
          this.error = true;
          this.errorText = "Неверный Логин";
          this.$emit("hop", "");
        } else {
          this.$emit("hop", value);
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <span class="placeholderAnim" :class="{ disabled: !activ, error: error }">{{ paceholder }}</span>
    <input
      :class="{ errorB: error }"
      class="MainInput MainInputColor"
      :placeholder="paceholder"
      :id="id"
      @input="text($event.target.value)"
    />
  </div>
  <span style="margin-left: 10px; margin-top: 13px" class="error">{{ errorText }}</span>
</template>

<style scoped>
.disabled {
  display: none;
}
.placeholderAnim {
  font-size: 20px;
  position: relative;
  animation: placeholderAnim 2s;
  left: 10px;
}
.MainInput {
  padding: 10px 10px;
  border-bottom: 2px solid;
  font-size: 20px;
  width: 100%;
}
@keyframes placeholderAnim {
  from {
    top: 31px;
    left: 10px;
    opacity: 0;
  }
  to {
    top: 0px;
    left: 10px;
    opacity: 1;
  }
}
.errorB {
  border-color: rgb(255, 21, 95, 90%);
}

.error {
  font-size: 20px;
  color: rgb(255, 21, 95, 90%);
}
</style>
