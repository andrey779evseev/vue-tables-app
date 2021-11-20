<template>
  <div class="ui-container">
    <p class="title">Виды текстовых полей</p>
    <ui-input
      :is-error="false"
      :placeholder="'Введите'"
      :name="'Название'"
      v-model:value="firstInput"
    ></ui-input>
    <ui-input
      :is-error="true"
      :placeholder="'Введите'"
      :name="'Название'"
      v-model:value="secondInput"
    ></ui-input>
    <ui-select
      :placeholder="'Введите'"
      :options="options"
      v-model:value="selected"
    ></ui-select>

    <p class="title">Загрузка архива</p>
    <ui-upload></ui-upload>

    <p class="title">Кнопки</p>
    <ui-play-btn></ui-play-btn>
    <ui-pause-btn></ui-pause-btn>
    <ui-settings-btn></ui-settings-btn>
    <ui-trash-btn></ui-trash-btn>
    <ui-upload-btn></ui-upload-btn>
    <ui-servers-btn></ui-servers-btn>
    <ui-light-cancel-btn></ui-light-cancel-btn>
    <ui-add-to-repository-btn></ui-add-to-repository-btn>
    <ui-back-btn></ui-back-btn>
    <ui-pagination></ui-pagination>
    <ui-dark-cancel-btn></ui-dark-cancel-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({
  name: 'ui-components'
})
export default class UiComponents extends Vue {
  options: string[] = []
  selected = ''
  firstInput = ''
  secondInput = ''

  mounted() {
    this.options = Array.apply(null, Array(100)).map(function () {
      return Array.apply(null, Array(~~(Math.random() * 10 + 3)))
        .map(function () {
          return String.fromCharCode(Math.random() * (123 - 97) + 97)
        })
        .join('')
    })
  }
}
</script>

<style scoped lang="less">
@font-face {
  font-family: Gilroy;
  src: url('@assets/fonts/Gilroy/Gilroy-Regular.ttf');
  src: url('@assets/fonts/Gilroy/Gilroy-Bold.ttf');
  src: url('@assets/fonts/Gilroy/Gilroy-SemiBold.ttf');
  src: url('@assets/fonts/Gilroy/Gilroy-Medium.ttf');
}
.ui-container {
  background-color: #08081f;
  width: 100%;
  padding: 15px;
  font-family: Gilroy-Regular;
  display: flex;
  flex-direction: column;

  & * {
    margin-bottom: 20px;
  }

  .title {
    font-family: Gilroy-SemiBold;
    font-size: 24px;
    color: #fafafa;
    margin-top: 20px;
  }
}
</style>
