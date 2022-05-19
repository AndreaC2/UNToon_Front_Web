<template>
  <div>
    <!-- <h1>File</h1> -->

    <vue-pdf-embed :source="source1" />

    <!-- <h1>Base64</h1>

    <vue-pdf-embed :source="source2" /> -->
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source1: 'https://raw.githubusercontent.com/Jussilvaca/Comics/main/Rapunzel.pdf',
      source2: {
        data: atob(''),
      },
    }
  }
}
</script>
