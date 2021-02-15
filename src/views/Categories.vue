<template>
  <v-row
    max-width="100vw"
  >
    <v-col
      cols="12"
      md="3"
      sm="12"
      lg="3"
      class="ml-2"
    >
      <VerticalCategoriesList />
    </v-col>
    <v-col>
      <AllProducts />
    </v-col>
  </v-row>
</template>

<script>
import VerticalCategoriesList from '@/components/VerticalCategoriesList'
import AllProducts from '@/components/AllProducts'
export default {
  components: {
    VerticalCategoriesList,
    AllProducts
  }
}
</script>

<style>

</style>
