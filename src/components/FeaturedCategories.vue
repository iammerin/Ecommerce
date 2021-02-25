<template>
  <v-row
    align="center"
    justify="center"
    class="mt-5"
  >
    <v-col
      cols="10"
      class="d-flex"
      v-if="checkMobileDesktop"
    >
      <v-col
        cols="2"
        md="2"
        v-for="(featured, index) in categories"
        :key="index"
      >
        <v-card
          class="cardToAnimateOnHover"
          height="150"
          :to="featured.link"
        >
          <v-card-text>
            <v-img
              :src="featured.image"
              :lazy-src="featured.image"
              class="ma-0 fill-height"
              height="100"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  />
                </v-row>
              </template>
            </v-img>
          </v-card-text>
          <v-card-actions>
            <v-row
              align="center"
              justify="center"
              class="mb-3 subtitle-2 text"
            >
              {{ featured.name }}
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-col>
    <v-col
      cols="12"
      v-else
      class="ma-auto flex-wrap"
      v-for="(featured, index) in categories"
      :key="index"
    >
      <v-row
        cols="6"
        md="2"
        sm="4"
        lg="2"
        align="center"
        justify="center"
      >
        <v-card
          :to="featured.link"
          class="mt-5"
          max-width="99vw"
        >
          <v-card-text>
            <v-img
              :src="featured.image"
              :lazy-src="featured.image"
              contain
              class="fill-height"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  />
                </v-row>
              </template>
            </v-img>
          </v-card-text>
          <v-card-actions>
            <v-row
              align="center"
              justify="center"
              class="mb-3 subtitle-2 text"
            >
              {{ featured.name }}
            </v-row>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FeaturedCategories',
  data () {
    return {
      categories: [
        { name: 'Clothing', image: 'https://picsum.photos/1100/500?random=5', link: '/clothes' },
        { name: 'Beauty', image: 'https://picsum.photos/1100/500?random=6', link: '/beauty-products' },
        { name: 'Appliances', image: 'https://picsum.photos/1100/500?random=7', link: '/appliances' },
        { name: 'Electronics', image: 'https://picsum.photos/1100/500?random=8', link: '/electronics' },
        { name: 'Fitness', image: 'https://picsum.photos/1100/500?random=9', link: '/fitness' },
        { name: 'Gadets', image: 'https://picsum.photos/1100/500?random=10', link: '/gadets' }
      ]
    }
  },
  computed: {
    checkMobileDesktop () {
      if (
        this.$vuetify.breakpoint.name === 'xs' ||
        this.$vuetify.breakpoint.name === 'sm'
      ) {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
  .v-card:hover{
    cursor: pointer;
  }
  .cardToAnimateOnHover {
    transition: box-shadow .3s!important;
  }
  .cardToAnimateOnHover:hover {
    box-shadow: 0 0 11px 5px rgba(33,33,33,.2);
  }
</style>
