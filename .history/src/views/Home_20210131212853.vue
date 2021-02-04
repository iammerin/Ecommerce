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
import productList from '@/components/CategorySlider'
import 
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CourselWithMenu,
    FeaturedCategories,
    FeaturedSales,
    productList,
  }
}
</script>
