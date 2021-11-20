<template>
  <div class="pagination">
    <button class="btn arrow-btn">
      <img src="@assets/icons/ui-components/left.svg" class="arrow" />
    </button>
    <button class="btn page-btn">1</button>
    <button class="btn arrow-btn">
      <img src="@assets/icons/ui-components/right.svg" class="arrow" />
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-pagination'
})
export default class UiPagination extends Vue {}
</script>

<style scoped lang="less">
.pagination {
  width: 134px;
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    width: 41px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d1e42;
    color: #fafafa;
    font-family: Gilroy-SemiBold;
    font-size: 15px;
    border-radius: 5px;

    &:hover {
      background: #272851;
    }

    .arrow {
      width: 17px;
      height: 17px;
    }
  }

  .arrow-btn {
    &:active {
      background: #272865;
    }
  }

  .page-btn {
    &:active {
      background: #586eb9;
    }
  }
}
</style>
