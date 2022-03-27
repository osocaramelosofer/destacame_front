<template>
  <div class="inputBx">
    <input type="submit" value="About Me" disabled>
  </div>
</template>


<style scoped>
.inputBx {
  position: relative;
  width: 100%;
  margin-bottom: 20px;

}

.inputBx input {
  width: 100%;
  outline: none;
  border-radius: 15px;
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

input[type="submit"] {
  margin-top: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .25);
  background:#18DFAD;
  color: #fff;
  font-weight: 900;
  font-family: Nunito, sans-serif;
  padding: 8px 10px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 1s;
  align-self: center;
  /*  border-color: #424A4E;
    border-width: 3px;*/
}

input[type="submit"]:hover {
  background: linear-gradient(115deg,
  #18DFAD,
  rgba(255,255,255,1));
  color: #fff;
  transition: .5s;
}
</style>
