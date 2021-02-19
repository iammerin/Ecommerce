<template>
  <div class="home">
    <CourselWithMenu />
    <FeaturedCategories />
    <AdsSection />
    <FeaturedSales />
  </div>
</template>

<script>
import CourselWithMenu from '@/components/CarouselWithMenu'
import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedSales from '@/components/FeaturedSales'
import AdsSection from '@/components/AdsSection'
// import Cart from '@/components/Cart'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CourselWithMenu,
    FeaturedCategories,
    FeaturedSales,
    AdsSection
  }
}
</script>
