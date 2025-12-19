<script setup lang="ts">

</script>

<template>
  <nav class="navbar bg-base-200 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <i class="fa-solid fa-list"/>
        </div>
        <ul
            tabindex="-1"
            class="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about-me">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact-me">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/my-projects">Projects</NuxtLink>
          </li>
          <li>
            <a href="">Blog</a>
            <ul>
              <li>
                <a href="">Dev</a>
              </li>
              <li>
                <a href="">Personal</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost text-xl">KutologoJM</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about-me">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact-me">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/my-projects">Projects</NuxtLink>
        </li>
        <li>
          <details>
            <summary>Blog</summary>
            <ul class="p-2 bg-base-200 w-40 z-1">
              <li>
                <a href="">Dev</a>
                <a href="">Personal</a>
              </li>
            </ul>
          </details>
        </li>

      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-link m-1">Support me</div>
        <ul tabindex="-1" class="dropdown-content menu bg-base-200 border rounded-box z-1 w-52 p-4 shadow-sm gap-4">
          <li><a
              href="https://www.buymeacoffee.com/kutologojm"
              target="_blank"
              class="btn btn-warning">
            <img src="/images/bmc-logo-no-background.png" alt="" class="w-5 h-5">Buy me a coffee
          </a></li>
          <li><a
              href="https://paypal.me/KutologoMashego"
              target="_blank"
              class="btn btn-secondary">
            <i class="fa-brands fa-paypal"/>Donate via PayPal
          </a></li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<style scoped>

</style>