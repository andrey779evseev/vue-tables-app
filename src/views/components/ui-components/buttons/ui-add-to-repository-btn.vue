<template>
  <button class="add-btn">добавить в репозиторий</button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-add-to-repository-btn'
})
export default class UiAddToRepositoryBtn extends Vue {}
</script>

<style scoped lang="less">
.add-btn {
  font-family: Gilroy-SemiBold;
  font-size: 15px;
  text-decoration-line: underline;
  color: #3e71bb;
  background: transparent;
  text-align: left;

  &:hover {
    text-decoration-line: none;
  }

  &:active {
    color: #4060cf;
    text-decoration-line: underline;
  }
}
</style>
