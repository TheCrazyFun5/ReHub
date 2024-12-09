<template>
  <div class="chatDialog">
    <div class="chatDialog_info">
      <div class="chatDialog_title">IT-Отдел</div>
      <div class="chatDialog_lastMessage">Денис: Коллеги, всем доброе утро!</div>
    </div>
    <div class="chatDialog_time">30.11.2024 10:00</div>
  </div>
</template>

<script></script>

<style scoped>
.chatDialog {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 6.4px var(--MainShadowColor);
}

.chatDialog_title {
  font-size: clamp(1rem, 2vw, 1.75rem);
  color: var(--MainColorText);
}

.chatDialog_lastMessage {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: var(--AvatarBorderColor);
}
</style>
