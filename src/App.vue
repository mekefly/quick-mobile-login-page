<script setup lang="ts">
import Login from "./components/Login";
import { rgb, px, vh, vw, PE } from "@wormery/wtsc";
import { wtsc, the } from "./wtsc/wtsc";
const w = wtsc.scoped("root");
</script>

<template>
  <div
    :style="
      w.add
        .backgroundColor(the.color1.out(w))
        .add.height(vh(100))
        .add.width(vw(100))
        .add.overflow('hidden')
        .out()
    "
  >
    <Login />
  </div>
</template>

<style>
#app {
  overflow: hidden;
}
</style>
