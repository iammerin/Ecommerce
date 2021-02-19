<template>
  <v-card
    class="mx-auto navigationMenu ml-1 mt-5"
    max-width="95vw"
    max-height="80vh"
    style="overflow: auto"
  >
    <v-list>
      <v-subheader>Categories</v-subheader>
      <div
        v-for="item in items"
        :key="item.title"
      >
        <v-list-group
          v-if="checkChild(item)"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
            :to="child.title"
          >
            <v-list-item-title v-text="child.title" />
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          link
          :to="item.title"
        >
          <v-list-item-title v-text="item.title" />
        </v-list-item>
      </div>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          items: [
            { title: 'Dresses' },
            { title: 'Handbags' },
            { title: 'Shoes' },
            { title: 'Jackets' },
            { title: 'Shirts' }
          ],
          active: true,
          title: 'Clothing'
        },
        {
          items: [
            { title: 'Gaming' },
            { title: 'Laptop Skins' },
            { title: 'Apple' },
            { title: 'Dell' },
            { title: 'Lenovo' },
            { title: 'Microsoft' },
            { title: 'Asus' },
            { title: 'Adapters' },
            { title: 'Batteries' }
          ],
          title: 'Electronics'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Education'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Family'
        },
        {
          items: [
            { title: 'Sport Wear' },
            { title: 'Shorts' },
            { title: 'School Bags' },
            { title: 'Wipes' },
            { title: 'Footwear' },
            { title: 'Toys' },
            { title: 'Bags' },
            { title: 'Blazzers' }
          ],
          title: 'Health'
        },
        {
          items: [
            { title: 'Chair' },
            { title: 'Desk' },
            { title: 'Stamps' }
          ],
          title: 'Office'
        },
        {
          title: 'Promotions'
        }
      ]
    }
  },
  mounted () {
    // this.items = this.$store.state.categories
  },
  methods: {
    checkChild (item) {
      const childs = item.items
      if (childs !== undefined && childs.length > 0) { return true } else { return false }
    }
  }
}
</script>

<style>

</style>
