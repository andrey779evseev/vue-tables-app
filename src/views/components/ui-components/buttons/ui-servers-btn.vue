<template>
  <button class="servers-btn">Сервера</button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-servers-btn'
})
export default class UiServersBtn extends Vue {}
</script>

<style scoped lang="less">
.servers-btn {
  width: 127px;
  height: 47px;
  background: #7d5eaf;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy-Medium;
  font-size: 14px;

  &:hover {
    background: #7346bb;
  }

  &:active {
    background: #5e31a7;
  }
}
</style>
