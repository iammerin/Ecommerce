<template>
  <div class="home">
    <CourselWithMenu />
    <FeaturedCategories />
    <FeaturedSales />
    <productList />
  </div>
</template>

<script>
import CourselWithMenu from '@/components/CarouselWithMenu'
import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedSales from '@/components/FeaturedSales'
import productList from '@/components/CategorySlider'
import Cart from '@/components/Cart'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CourselWithMenu,
    FeaturedCategories,
    FeaturedSales,
    productList,
    Cart,
  }
}
</script>
