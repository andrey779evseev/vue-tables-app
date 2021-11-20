<template>
  <div class="select-container" @mouseleave="isDropdown = false">
    <div class="input-container" @click="isDropdown = true">
      <div
        class="placeholder"
        :data-placeholder="value === '' ? '' : sortedOptions[0]"
      >
        <input
          class="input"
          :value="value"
          :placeholder="placeholder"
          @input="changeValue(($event.target as HTMLInputElement).value)"
          spellcheck="false"
        />
      </div>
      <img
        src="@assets/icons/ui-components/arrow.svg"
        alt="arrow"
        class="arrow"
      />
    </div>

    <div v-if="isDropdown" class="options">
      <div
        class="option"
        @click="changeSelected(option)"
        v-for="(option, index) in sortedOptions"
        :key="option"
        :style="{
          marginBottom: index === sortedOptions.length - 1 ? '0' : '15px'
        }"
        :class="{ 'selected': option === value }"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop, Emit } from 'vue-property-decorator'

@Options({
  name: 'ui-select'
})
export default class UiSelect extends Vue {
  @Prop() placeholder: string
  @Prop() options!: string[]
  @Prop() value!: string
  @Emit('update:value') changeValue(value: string) {
    this.isDropdown = true
    return value
  }
  isDropdown: boolean = false

  get sortedOptions() {
    return this.options.filter(element =>
      element.toLowerCase().startsWith(this.value.toLowerCase())
    )
  }

  toggleIsDropdown() {
    setTimeout(() => (this.isDropdown = !this.isDropdown), 50)
  }

  changeSelected(option: string) {
    this.changeValue(option)
    this.isDropdown = false
  }
}
</script>

<style scoped lang="less">
.select-container {
  display: flex;
  flex-direction: column;
  width: 100%;

  .input-container {
    position: relative;
    width: 100%;

    .placeholder {
      position: relative;

      .input {
        width: 100%;
        background: #141431;
        border: 2px solid rgba(88, 110, 185, 0.4);
        border-radius: 10px;
        height: 52px;
        display: flex;
        align-items: center;
        padding-left: 22px;
        outline: none;
        margin-bottom: 6px;
        color: white;
        font-size: 16px;
        font-family: Gilroy-Regular;

        &::placeholder {
          color: #777897;
          font-size: 16px;
        }
      }

      &::after {
        position: absolute;
        left: 2px;
        top: 17px;
        content: attr(data-placeholder);
        pointer-events: none;
        color: white;
        opacity: 0.5;
        font-size: 16px;
        padding-left: 22px;
      }
    }

    .arrow {
      position: absolute;
      top: 25%;
      right: 2%;
    }
  }

  .options {
    max-height: 180px;
    width: 100%;
    overflow-y: scroll;
    padding: 21.5px 22px 22px 21px;
    background: #141431;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      height: 200px;
      background-color: rgba(255, 255, 255, 0);
    }

    &::-webkit-scrollbar-track,
    &::-webkit-scrollbar-thumb {
      border-top: 12px solid rgba(255, 255, 255, 0);
      border-bottom: 10px solid rgba(255, 255, 255, 0);
      border-right: 11.5px solid rgba(255, 255, 255, 0);
      width: 5px;
      background-clip: padding-box;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #08081f;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #1d1e42;
    }

    .option {
      color: white;
      font-size: 16px;
      color: white;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    .selected {
      padding: 10px 0 7.5px 17px;
      min-height: 34px;
      border-radius: 6px;
      background: #1d1e42;
      font-size: 16px;
      color: #3e71bb;
      line-height: 19px;
    }
  }
}
</style>
