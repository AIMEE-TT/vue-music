<template>
  <div class="rightStyle">
    <swiper></swiper>
    <music-list></music-list>
    <only-one></only-one>
    <new-music></new-music>
  </div>
</template>
<script>
import Swiper from '../../../components/Swiper/swiper'
import MusicList from '../../../components/musiclist/MusicList'
import OnlyOne from '../../../components/onlyone/OnlyOne'
import NewMusic from '../../../components/newmusic/NewMusic'
export default {
  components: {
    Swiper,
    MusicList,
    OnlyOne,
    NewMusic
  }
}
</script>
<style lang="less">

</style>
