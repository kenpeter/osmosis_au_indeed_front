<!-- no store here in this component -->
<template>
  <div class="container">
    <div class="row">
      <div v-for="obj in objs" class="col-lg-4 col-md-6 col-sm-12 mycol">
        <p>
          <a :href="`${obj.jobUrl}`">
            {{ obj.jobTitle }}
          </a>
        </p>
        <p>
          <b>Summary</b>: {{ obj.summary }}<br/>
          <b>WhenPosted</b>: {{ obj.whenPosted }}<br/>
          <b>Advertiser</b>: {{ obj.advertiser }}<br/>
          <b>category</b>: {{ obj.category }}<br/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getAllObjs } from '../vuex/obj/actions'

  export default {
    vuex: {
      // objs is the var in template.
      getters: {
        objs: ({ objs }) => objs.all
      },
      // actions.....????
      actions: {
        getAllObjs
      }
    },
    created () {
      this.getAllObjs()
    }
  }
</script>

<style>
.row {
  border: 1px solid;
}

.mycol {
  border: 1px solid;
  height: 200px;
}
</style>
