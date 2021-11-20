<template>
  <div class="upload-container" v-if="!isLoading">
    <input type="file" @change="upload($event)" class="file" id="file" />
    <label for="file" class="file-label">Загрузка архива</label>
    <span class="filename" v-if="filename">{{ filename }}</span>
  </div>
  <div class="progress-container" v-if="isLoading">
    <el-progress
      type="circle"
      :percentage="loadingProgress"
      :show-text="false"
      :width="16"
      :color="'#586EB9'"
    />
    <span class="percents">{{ loadingProgress }}</span>
    <span class="filename">{{ filename ?? 'filename.zip' }}</span>
    <button class="cancel-btn">Отмена</button>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'ui-upload'
})
export default class UiUpload extends Vue {
  @Prop() url: string
  isLoading: boolean = false
  loadingProgress: number = 0
  filename: string

  upload(e: Event) {
    this.isLoading = true
    this.filename = (e.target as HTMLInputElement).files[0].name

    //! in real here will be an axios request, something like this
    // const reader = new FileReader()
    // reader.readAsDataURL((e.target as HTMLInputElement).files[0])
    // axios.post(this.url, {
    //   file: reader.result,
    //   onUploadProgress: (e: ProgressEvent) => this.loadingProgress = Math.round((e.loaded / e.total) * 100)
    // })

    //! simulation of upload request progress
    setTimeout(() => {
      this.loadingProgress += 25
      setTimeout(() => {
        this.loadingProgress += 25
        setTimeout(() => {
          this.loadingProgress += 25
          setTimeout(() => {
            this.loadingProgress += 25
            this.isLoading = false
            this.loadingProgress = 0
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }
}
</script>

<style lang="less">
.el-progress-circle svg {
  & .el-progress-circle__track {
    stroke: #2d2d54;
    stroke-width: 10px;
  }

  & .el-progress-circle__path {
    stroke: #586eb9;
    stroke-width: 10px;
  }
}
</style>

<style scoped lang="less">
.upload-container {
  position: relative;
  display: flex;
  align-items: center;

  .file {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }

  .file-label {
    font-family: Gilroy-Medium;
    color: white;
    width: 178px;
    height: 39px;
    background: #7d5eaf;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: none;
    margin-right: 10px;
  }

  .filename {
    color: #777897;
    font-size: 15px;
  }
}

.progress-container {
  width: 286px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .percents {
    font-family: Gilroy-SemiBold;
    font-size: 15px;
    color: #dce1f1;
  }

  .filename {
    color: #777897;
  }

  .cancel-btn {
    background: #586eb9;
    width: 118px;
    height: 39px;
    border-radius: 8px;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
    font-family: Gilroy-Medium;
  }
}
</style>
