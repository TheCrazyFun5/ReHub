<script>
import ChatDialog from "@/components/ui/chatDialog.vue";

export default {
  components: {
    ChatDialog,
  },
};
</script>

<template>
  <div class="chats">
    <h2 class="chats_header">Сообщения</h2>
    <div class="chats_body">
      <div class="chats_dialogs"><ChatDialog></ChatDialog></div>
      <div class="chats_content"></div>
    </div>
  </div>
</template>

<style scoped>
.chats_header {
  font-size: 48px;
}

.chats_body {
  display: flex;
  flex-direction: row;

  margin-top: 40px;

  .chats_content {
    height: 100%;
    width: 100%;
    margin-left: 25px;

    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 6.4px var(--MainShadowColor);
  }
}
</style>
