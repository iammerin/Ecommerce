<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="10"
    >
      <v-row class="mt-5 mb-10">
        <v-divider />
      </v-row>
      <v-row>
        <v-col>
          <v-card
            elevation="4"
          >
            <v-img
              src="../assets/wallpaperflare.com_wallpaper.jpg"
              lazy-src="https://picsum.photos/id/11/100/60"
              max-width="100vw"
              max-height="350"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  />
                </v-row>
              </template>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="end"
              >
                <v-col
                  cols="4"
                >
                  <div
                    class="d-flex display-3 white--text font-weight-black"
                  >
                    Shop The Best. <br>
                    Get The Best.
                  </div>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>
