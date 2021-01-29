<template>
  <v-row
    align="center"
    justify="center"
    class="mt-5"
  >
    <v-col
      cols="10"
      class="d-flex"
    >
      <v-col
        cols="2"
        v-for="(featured, index) in categories"
        :key="index"
      >
        <v-hover
          v-slot="{ hover }"
        >
          <v-card
            :elevation="hover? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="cardToAnimateOnHover slide"
            height="150"
            :to="featured.link"
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
        </v-hover>
      </v-col>
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
  }

}
</script>

<style scoped>
  .v-card:hover{
    cursor: pointer;
  }
  .slide {
  position: relative;
  overflow: hidden;
}

.text {
  position: relative;
  transition: 0.5s;
}

.slide::before {
  content: "";
position: absolute;
top: 0;
left: 0;
width: 130%;
height: 55px;
background-color: #007bff!important;
transform: translate(-110%, 0) skew(-30deg);
transition: 0.5s;
}

.slide:hover .text {
  color: #fff;
}

.slide:hover::before {
  transform: translate(-5%, 0) skew(-15deg);
}
</style>
