<template>
  <div class="newmusic">
    <title-header name="最新音乐"></title-header>
    <NewList></NewList>
  </div>
</template>
<script>
import TitleHeader from '../titleheader/TitleHeader'
import NewList from './NewList'
export default {
  components: {
    TitleHeader,
    NewList
  }
}
</script>
<style lang="less" scoped>
.newmusic {
  width: 80%;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>