<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// We declare the props separately
// to make props types inferable.
const LogProps = Vue.extend({
  props: {
    propMessage: String,
  },
});
@Component({})
class Logger extends LogProps {
  // use prop values for initial data
  helloMsg: string = `Hello, ${this.propMessage}`;

  // lifecycle hook
  mounted() {
    this.greet();
  }

  // method
  greet() {
    console.log(this.helloMsg);
  }
}

export default Logger;
</script>
