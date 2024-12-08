<script>
export default {
  props: {
    id: { type: String, required: false, default: "UserName" },
    type: { type: String, required: false, default: "text" },
    paceholder: { type: String, required: false, default: "Ты что еблан? Мне нужны аргументы" },
  },
  emits: ["back"],
  data() {
    return {
      error: false,
      errorText: "",
      transferPlaceholder: false,
    };
  },
  methods: {
    validation(value) {
      this.error = false;
      this.errorText = "";
      if (value.length >= 1) this.transferPlaceholder = true;
      else this.transferPlaceholder = false;
      switch (this.id) {
        case "UserName":
          if (value.length <= 4 && value.length > 0) this.errorShow("Неверное имя");
          else this.$emit("back", value);
          break;
        case "Login":
          if (value.length <= 4 && value.length > 0) this.errorShow("Неверный логин");
          else this.$emit("back", value);
          break;
        case "Password":
          if (value.length <= 5 && value.length > 0) this.errorShow("Неверный пароль");
          else this.$emit("back", value);
          break;
        default:
          this.$emit("back", value);
      }
    },
    errorShow(text) {
      this.error = true;
      this.errorText = text;
      this.$emit("back", "");
    },
  },
};
</script>

<template>
  <div class="customInput">
    <div>
      <span class="placeholderAnim" :class="{ disabled: !transferPlaceholder, error: error }">{{ paceholder }}</span>
      <input
        class="MainInput"
        :type="type"
        :class="{ Border__error: error, smooth_transition: !error }"
        :placeholder="paceholder"
        :id="id"
        @input="validation($event.target.value)"
      />
    </div>
    <span class="error">{{ errorText }}</span>
  </div>
</template>

<style scoped>
.customInput {
  display: flex;
  gap: 5px;
  flex-direction: column;
}
.placeholderAnim {
  font-size: 20px;
  position: relative;
  margin-left: 10px;
  animation: placeholderAnim 2s;
  color: var(--MainInputColorActiv);
}
input.MainInput {
  padding: 10px 10px;
  border-bottom: 2px solid;
  font-size: 20px;
  width: 100%;
  color: var(--MainInputColor);
  border-color: var(--MainInputColor);
  background-color: transparent;
}

input.MainInput:focus {
  color: var(--MainInputColorActiv);
  border-color: var(--MainInputColorActiv);
}
input.MainInput::placeholder {
  color: var(--MainInputColor);
}
.error {
  font-size: 20px;
  color: rgb(255, 21, 95, 90%);
  margin-left: 10px;
}
input.Border__error:focus {
  border-color: rgb(255, 21, 95, 90%);
}
input.Border__error {
  border-color: rgb(255, 21, 95, 90%);
}
.smooth_transition:focus {
  animation: smooth_color_transition_when_focusing 1s;
}
.disabled {
  display: none;
}
/* Анимация */
@keyframes placeholderAnim {
  from {
    top: 31px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}

@keyframes smooth_color_transition_when_focusing {
  from {
    color: var(--MainInputColor);
    border-color: var(--MainInputColor);
  }
  to {
    border-color: var(--MainInputColorActiv);
    color: var(--MainInputColorActiv);
  }
}
</style>
