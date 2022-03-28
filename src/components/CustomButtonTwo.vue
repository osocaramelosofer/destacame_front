<template>
  <router-link to="/about-me" class="button">
  <a href="#" class="cta flex">
    <span>About me</span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </a>
  </router-link>
</template>

<style scoped>

.button {
  display: grid;
}

a {
  text-decoration: none;
  color: inherit;
font-weight: bold;
font-family: Nunito, sans-serif;
}


.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all .2s ease;
align-items: center;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgb(24, 223, 173);
  width: 56px;
  height: 56px;
  transition: all .3s ease; }
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: .25em;
  text-transform: uppercase;
  vertical-align: middle; }
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #000000;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all .3s ease; }
.cta:hover:before {
  width: 100%;
  background: #18DFAD; }
.cta:hover svg {
  transform: translateX(0); }
.cta:active {
  transform: scale(0.96); }
</style>
