<template>
  <p class="project-description">
    {{ description }}
  </p>
</template>

<script>
  const { description } = require('../../../package');

  export default {
    data() {
      return {
        description: description
      }
    }
  }
</script>
