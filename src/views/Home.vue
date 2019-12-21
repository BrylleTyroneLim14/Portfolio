<template>
  <div class="home">
    <app-home></app-home>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
name: "home",
components: {
  'app-home': Home,
  }
}   

</script>
