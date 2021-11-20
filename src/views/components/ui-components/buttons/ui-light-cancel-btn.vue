<template>
  <button class="cancel-btn">Отмена</button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-light-cancel-btn'
})
export default class UiLightCancelBtn extends Vue {}
</script>

<style scoped lang="less">
.cancel-btn {
  width: 127px;
  height: 47px;
  background: #586eb9;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy-Medium;
  font-size: 14px;

  &:hover {
    background: #4060cf;
  }

  &:active {
    background: #2b46a5;
  }
}
</style>
