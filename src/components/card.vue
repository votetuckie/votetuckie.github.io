
<template>
 <div class="card">
          <div class="card-head" v-if="header" 
          v-bind:style="{'card-head-soft': type == 'soft', 'card-head-bordered': type == 'bordered'}">
              {{header}}
          </div>
          <div class="card-body">
              <slot></slot>
          </div>
      </div>
</template>

<script>
export default {
  name: 'card',
  created() {

  },
  data() {
    return {
    }
  },
  props: [
   'header', 'type'
  ],
  methods: {
   
  },
}
</script>

<style>

</style>

