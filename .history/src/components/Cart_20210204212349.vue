



<script>
export default {
  name: 'Cart',
  data () {
    return {
      categories: [
        { name: 'Clothing', image: 'https://picsum.photos/1100/500?random=5', link: '/clothes' },
        { name: 'Beauty', image: 'https://picsum.photos/1100/500?random=6', link: '/beauty-products' },
        { name: 'Appliances', image: 'https://picsum.photos/1100/500?random=7', link: '/appliances' },
        { name: 'Electronics', image: 'https://picsum.photos/1100/500?random=8', link: '/electronics' },
        { name: 'Fitness', image: 'https://picsum.photos/1100/500?random=9', link: '/fitness' },
        { name: 'Gadets', image: 'https://picsum.photos/1100/500?random=10', link: '/gadets' },
      ]
    }
  }

}
</script>

<style scoped>
  .v-card:hover{
    cursor: pointer;
  }
</style>