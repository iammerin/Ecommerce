<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      md="3"
      sm="3"
      lg="3"
    >
      <VerticalCategoriesList />
    </v-col>
    <v-col>
      Here all Products.
    </v-col>
  </v-row>
</template>

<script>
import VerticalCategoriesList from '@/components/VerticalCategoriesList'
export default {
  components: {
    VerticalCategoriesList
  }
}
</script>

<style>

</style>
