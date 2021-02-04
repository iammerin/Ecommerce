<template>
  <div class="home">
    <CourselWithMenu 
    <v-card>
      </v-card>
    />
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
    product: ''
  }),
  mounted () {
    this.product = this.$store.getters.getCurrentProduct
  },
  components: {
    CourselWithMenu,
    FeaturedCategories,
    FeaturedSales
  }
}
</script>
