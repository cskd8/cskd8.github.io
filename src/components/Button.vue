<template>
    <div class="item"><div class="link">{{ name }}</div></div>
</template>

<script>
export default {
  props: ['name'],
  name: 'Button',
  data () {
    return {
      message: 'Button',
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: '';
  background: #333;
  transform: scale(0, 1);
}
.link:hover::before {
  animation: hover-in .3s forwards alternate, hover-out .3s .3s forwards alternate;
}
.link {
  position: relative;
  display: inline-block;
  padding: .5em 4em;
  border: 2px solid #333;
  color: #333;
  text-align: center;
  text-decoration: none;
  transition: .3s;
}
.link:hover {
  animation: hover .6s forwards;
}
@keyframes hover {
  0%, 100% {
    color: #333;
  }
  50% {
    color: #fff;
  }
}
@keyframes hover-in {
  0% {
    transform-origin: left top;
    transform: scale(0, 1);
  }
  100% {
    transform-origin: left top;
    transform: scale(1, 1);
  }
}
@keyframes hover-out {
  0% {
    transform-origin: right top;
    transform: scale(1, 1);
  }
  100% {
    transform-origin: right top;
    transform: scale(0, 1);
  }
}
</style>
