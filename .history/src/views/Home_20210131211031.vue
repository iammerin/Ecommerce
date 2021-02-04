<template>
  <div class="home">
    <CourselWithMenu />
    <FeaturedCategories />
    <FeaturedSales />:
  </div>
</template>

<script>
import CourselWithMenu from '@/components/CarouselWithMenu'
import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedSales from '@/components/FeaturedSales'
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    joke:''
  }),
  mounted(){},
  components: {
    CourselWithMenu,
    FeaturedCategories,
    FeaturedSales
  }
}
</script>
