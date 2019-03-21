<template>
  <h1 class="log">Vue Log Component</h1>
</template>

<script>
export default {
  name: 'Log',
  data() {
    return {
      logMessage: '<Log /> Vue Component Mounted.',
    };
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.logMessage);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.log {
  color: coral;
}
</style>
