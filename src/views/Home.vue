<template>
  <div class="home">
    <CourselWithMenu />
  </div>
</template>

<script>
import CourselWithMenu from '@/components/CarouselWithMenu'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CourselWithMenu
  }
}
</script>
