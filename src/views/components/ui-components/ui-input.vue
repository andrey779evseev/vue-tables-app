<template>
  <div class="container">
    <span class="label"
      >{{ name ?? 'Название' }}
      <span v-if="isError" class="error-label"> * Неверное значение</span>
    </span>
    <input
      type="text"
      class="input"
      :placeholder="placeholder ?? ''"
      :class="{ 'error-input': isError }"
      :value="value"
      @input="changeValue($event)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop, Emit } from 'vue-property-decorator'
@Options({
  name: 'ui-input'
})
export default class UiInput extends Vue {
  @Prop() isError!: boolean
  @Prop() placeholder: string
  @Prop() name: string
  @Prop() value!: string
  @Emit('update:value') changeValue(e: any) {
    return e.target.value
  }
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  .label {
    font-size: 13px;
    font-family: Gilroy-Bold;
    color: #777897;

    .error-label {
      color: #b73542;
      font-family: Gilroy-SemiBold;
    }
  }

  .input {
    margin-top: 3px;
    width: 100%;
    height: 47px;
    background: #141431;
    border: 2px solid rgba(88, 110, 185, 0.4);
    display: flex;
    align-items: center;
    padding-left: 22px;
    border-radius: 10px;
    color: white;
    outline: none;

    &::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #777897;
    }

    &:focus {
      border: 2px solid #586eb9;
    }
  }

  .error-input {
    border: 2px solid rgba(255, 76, 93, 0.4) !important;
  }
}
</style>
