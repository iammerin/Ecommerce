// <div id="app">
//   <v-app id="inspire">
//     <v-row justify="space-around">
//       <v-col cols="auto">
//         <v-dialog
//           transition="dialog-bottom-transition"
//           max-width="600"
//         >
//         </v-dialog>
//       </v-col>

//       <v-col cols="auto">
//         <v-dialog
//           transition="dialog-top-transition"
//           max-width="600"
//         >
<template v-slot:activator="{ on, attrs }">
<v-btn
    color="primary"
    v-bind="attrs"
    v-on="on"
>From the top</v-btn>
</template>
        <template v-slot:default="dialog">
        <v-card>
            <v-toolbar
            color="primary"
            dark
            >Opening from the top</v-toolbar>
            <v-card-text>
            <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
            <v-btn
                text
                @click="dialog.value = false"
            >Close</v-btn>
            </v-card-actions>
        </v-card>
        </template>
    </v-dialog>
    </v-col>
</v-row>
</v-app>
</div>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      categories: [
        {
          title: 'Jeans',
          id: '1',
          color: 'Brown',
          price: 600,
          availability: 'Available'
        },
        {
          title: 'Bikini',
          id: '12',
          color: 'Black',
          price: 400,
          availability: 'Available'
        }
      ]
    }
  }

}
</script>
