<template>
  <div id="app">

    <div class="row">
      <div class="card">
        <nav class="links-hover">
            <router-link to="/about">About</router-link>
            <router-link to="/portfolio">Portfolio</router-link>

            <a href="https://twitter.com/bwuhhh">twinter</a>
            <a href="https://github.com/twuky">get hub</a>
            <a href="https://tuckie.itch.io/">itch.bo</a>
            <a href="mailto:hey@tuckie.zone">em@il</a>
        </nav>

      </div>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  loader: 'url-loader'
}
</script>

<style>
@font-face {
  font-family: "monofur";
  src: local("monofur"),   url(./fonts/monofur.ttf) format("truetype");
}
</style>
