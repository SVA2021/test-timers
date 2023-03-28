<template>
  <main class="main">
    <TimersList/>
  </main>
</template>

<script>
import TimersList from "@/components/TimersList";

export default {
  name: 'App',
  components: {
    TimersList
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 225px;
}

@media screen and (min-width: 768px) {
  .main {
    width: 500px;
  }
}

@media screen and (min-width: 1024px) {
  .main {
    width: 775px;
  }
}
</style>
