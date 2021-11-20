<template>
  <button class="dark-cancel-btn">Отмена</button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-dark-cancel-btn'
})
export default class UiDarkCancelBtn extends Vue {}
</script>

<style scoped lang="less">
.dark-cancel-btn {
  width: 118px;
  height: 47px;
  background: #141431;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy-Medium;
  font-size: 14px;

  &:hover {
    background: #1d1e42;
  }

  &:active {
    background: #272865;
  }
}
</style>
