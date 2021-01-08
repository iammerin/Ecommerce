<template>
  <div class="home">
    <CourselWithMenu />
    <FeaturedCategories />
  </div>
</template>

<script>
import CourselWithMenu from '@/components/CarouselWithMenu'
import FeaturedCategories from '@/components/FeaturedCategories'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CourselWithMenu,
    FeaturedCategories
  }
}
</script>
