<template>
  <button class="back-btn">
    <img src="@assets/icons/ui-components/back.svg" class="back" />
  </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-back-btn'
})
export default class UiBackBtn extends Vue {}
</script>

<style scoped lang="less">
.back-btn {
  width: 43px;
  height: 43px;
  background: #1d1e42;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .back {
    width: 21px;
    height: 21px;
  }

  &:hover {
    background: #272851;
  }

  &:active {
    background: #272865;
  }
}
</style>
