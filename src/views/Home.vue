<template>
  <div class="home">
    <CourselWithMenu />
    <FeaturedCategories />
    <FeaturedSales />
    <FeaturedSales />
    <FeaturedSales />
  </div>
</template>

<script>
import CourselWithMenu from '@/components/CarouselWithMenu'
import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedSales from '@/components/FeaturedSales'
import Cart from '@/components/Cart'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CourselWithMenu,
    FeaturedCategories,
    FeaturedSales,
    Cart
  }
}
</script>
