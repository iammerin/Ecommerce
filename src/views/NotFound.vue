<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="10"
    >
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="6">
        <v-card-title class="text-h1">
          Opps!
        </v-card-title>
              <div class="text-h2 mt-10">
                The page you were searching for is not found.
              </div>
            </v-col>
            <v-col cols="6">
              <v-hover
                v-slot="{ hover }"
              >
                <v-card
                  :elevation="hover? 16 : 0"
                >
                    <v-img
                      src="https://picsum.photos/id/237/600/600"
                      lazy-src="https://picsum.photos/id/237/600/600"
                      contain
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
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
