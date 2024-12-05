<script></script>
<template>
  <button><slot /></button>
</template>
<style scoped>
button {
  padding: 13px 55px;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 600;

  color: white;
  background-color: var(--BlueColorText);

  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 90%;
  }

  &::selection {
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
