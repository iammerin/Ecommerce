<template>
  <v-row align="center" justify="center" class="mt-2">
    <v-col cols="10">
      <v-row>
        <v-col cols="3">
          <v-card
            class="mx-auto navigationMenu"
            max-width="500"
            max-height="600"
          >
            <v-list>
              <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="child in item.items"
                  :key="child.title"
                >
                  <v-list-item-content>
                    <router-link :to="child.title">
                      <v-list-item-title v-text="child.title"></v-list-item-title>
                    </router-link>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-carousel
            hide-delimiters
            cycle
            interval="6000"
            progress
            progress-color="primary"
            height="600"
          >
            <v-carousel-item
              v-for="(item, i) in carouselItems"
              :key="i"
            >
              <v-img
                :src="item.src"
                :lazy-src="item.src"
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
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CarouselWithMenu',
  data () {
    return {
      carouselItems: [
        {
          src: 'https://picsum.photos/1100/500?random=1'
        },
        {
          src: 'https://picsum.photos/1100/500?random=2'
        },
        {
          src: 'https://picsum.photos/1100/500?random=3'
        },
        {
          src: 'https://picsum.photos/1100/500?random=4'
        }
      ],
      selectedItem: 1,
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Attractions'
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'Breakfast & brunch' },
            { title: 'Breakfast & brunch' },
            { title: 'Breakfast & brunch' },
            { title: 'Breakfast & brunch' },
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'New American' },
            { title: 'New American' },
            { title: 'New American' },
            { title: 'New American' },
            { title: 'New American' },
            { title: 'Sushi' }
          ],
          title: 'Dining'
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Education'
        },
        {
          action: 'mdi-run',
          items: [{ title: 'List Item' }],
          title: 'Family'
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Health'
        },
        {
          action: 'mdi-content-cut',
          items: [{ title: 'List Item' }],
          title: 'Office'
        },
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promotions'
        }
      ]
    }
  }
}
</script>

<style>
.navigationMenu {
  overflow-y: scroll !important;
}
</style>
