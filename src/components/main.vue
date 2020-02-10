<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
        <router-link to="/work"><div class="link">Works</div></router-link>
        <router-link to="/profile"><div class="link">profile</div></router-link>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  display: inline-block;
  width: 10vw;
  height: 10vh;
  background-color: #2c3e50;
  transition: all 0.3s linear 0s;
  color: rgb(255, 255, 255);
  line-height: 10vh;
}
.link:hover {
  transform: rotateZ(360deg);
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
