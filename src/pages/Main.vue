<template>
  <div class="holder">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
    <div class="txt">
        <h1>hirocy's portfolio</h1>
        <br>
        <ul>
          <li>
            <Button
              name="Profile"
              to="/profile"
            />
          </li>
          <li>
            <Button
              name="Works"
              to="/works"
            />
          </li>
          <li>
            <Button
              name="Achievements"
              to="/achievements"
            />
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components: {
    Button
  },
  name: 'Main',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    body {
      margin: 0;
      font-family: 'Bitter', serif;
      text-align: center;
    }
    .holder,
    .first,
    .second,
    .third {
      height: 100vh;
      width: 100vw;
    }
    .first,
    .second,
    .third {
      position: absolute;
    }
    .second,
    .third {
      opacity: 0;
    }
    .holder {
      height: 100vh;
      position: relative;
      z-index: 1;
    }
    .first {
      animation: first 10s infinite;
      background: linear-gradient(#5ff8ca, #60e08c);
      z-index: 10;
    }
      @keyframes first {
        0% {opacity: 1.0;}
        10% {opacity: 0.8;}
        20% {opacity: 0.6;}
        30% {opacity: 0.4;}
        40% {opacity: 0.2;}
        50% {opacity: 0.1;}
        60% {opacity: 0.2;}
        70% {opacity: 0.4;}
        80% {opacity: 0.6;}
        90% {opacity: 0.8;}
        100% {opacity: 1.0;}
      }
    .second {
      animation: second 10s infinite; animation-delay: 2s;
      background: linear-gradient(#19eaa6, #00a1f0);
      z-index: 20;
    }
      @keyframes second {
        0% {opacity: 0;}
        10% {opacity: 0.2;}
        20% {opacity: 0.4;}
        30% {opacity: 0.6;}
        40% {opacity: 0.8;}
        50% {opacity: 1.0;}
        60% {opacity: 0.8;}
        70% {opacity: 0.6;}
        80% {opacity: 0.4;}
        90% {opacity: 0.2;}
        100% {opacity: 0;}
      }
    .third {
      animation: third 10s infinite;
      animation-delay: 8s;
      background: linear-gradient(#aab7f8, #ff75c6);
      z-index: 30;
    }
      @keyframes third {
        0% {opacity: 0;}
        10% {opacity: 0.2;}
        20% {opacity: 0.4;}
        30% {opacity: 0.6;}
        40% {opacity: 0.8;}
        50% {opacity: 1.0;}
        60% {opacity: 0.8;}
        70% {opacity: 0.6;}
        80% {opacity: 0.4;}
        90% {opacity: 0.2;}
        100% {opacity: 0;}
      }
    .txt {
      margin-top: calc(50vh - 150px);
      position: absolute;
      width: 100%;
      z-index: 1000;
    }
</style>
