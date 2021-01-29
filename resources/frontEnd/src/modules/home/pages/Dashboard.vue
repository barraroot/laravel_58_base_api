<template>
  <q-page class="q-pa-sm">
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="q-pa-none">
        <div class="row q-col-gutter-sm ">
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item style="background-color: #5064b5" class="q-pa-none q-ml-xs">
              <q-item-section side style="background-color: #3e51b5" class=" q-pa-lg q-mr-none text-white">
                <q-icon name="person" color="white" size="24px"></q-icon>
              </q-item-section>
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">200</q-item-label>
                <q-item-label>My Account</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item style="background-color: #f37169" class="q-pa-none q-ml-xs ">
              <q-item-section side style="background-color: #f34636" class=" q-pa-lg q-mr-none text-white">
                <q-icon name="fab fa-twitter" size="24px"></q-icon>
              </q-item-section>
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">500</q-item-label>
                <q-item-label>Followers</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item style="background-color: #ea6a7f" class="q-pa-none q-ml-xs">
              <q-item-section side style="background-color: #ea4b64" class=" q-pa-lg q-mr-none text-white">
                <q-icon name="fab fa-google" size="24px"></q-icon>
              </q-item-section>
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">50</q-item-label>
                <q-item-label>Connections</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-3 col-sm-12 col-xs-12">
            <q-item style="background-color: #a270b1" class="q-pa-none q-ml-xs q-mr-xs">
              <q-item-section side style="background-color: #9f52b1" class=" q-pa-lg q-mr-none text-white">
                <q-icon name="bar_chart" size="24px"></q-icon>
              </q-item-section>
              <q-item-section class=" q-pa-md q-ml-none  text-white">
                <q-item-label class="text-white text-h6 text-weight-bolder">1020</q-item-label>
                <q-item-label> Website Visits</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
    export default {
        name: 'PageIndex',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
