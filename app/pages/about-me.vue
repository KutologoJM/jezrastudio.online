<script setup lang="ts">

</script>

<template>
  <main class="prose-xl">

    <section>
      <div class="inline-block  rounded-2xl p-4 text-left">
        <h2 id="about-me" class="mb-2 mt-2 text-center">
          About Me: <i class="fa-regular fa-user"/>
        </h2>
        <div class="pl-5">
          <h3>
            Who am I?
          </h3>
          <p>
            Hello there. I'm Kutologo J. Mashego.
            An aspiring Django backend developer and I'd like to tell you a bit about myself and why I'm on this journey.
          </p>
          <h2>
            My goals and what drives me?
          </h2>
          <p>
            I wish to become a software engineer so that I may gain the skills and expertise needed to be able to turn any
            ideas I have into reality, whether it be a simple weather widget for my site or programming the logic for a recreation
            of the blackjack card game.
            <br>
            Programming is my form of creative expression. My way of allowing my ideas to come to life through experimentation
            and perseverance. I find joy in learning about how machines, animals, structures or anything within my interests
            works and using that to develop something I can interact with.
          </p>
          <h2>
            My programming experience
          </h2>
          <p>
            I currently have Python as my programming language of choice, it was easy to pick up and works well with
            my affinity for fast prototyping and my 'build as you break' mentality. I was mostly command line based while
            learning python but transitioned into using Django once I saw my ideas could benefit from having a solid GUI.
            <br>
            I prefer Tailwind css for my styling. I use Nuxt for building dedicated front-ends like this webpage but I am still
            quite new to it, but I'm enjoying the learning experience. My knowledge with Javascript is at the level of a novice syntax wise,
            however conceptually I can operate at the same level as my Python abilities which I consider to be Intermediate.
          </p>

          <h2>
            My Education level
          </h2>
          <p>
            I am self-taught primarily through trial and error, online tutorials and some short courses. I learnt html, css
            and Javascript in high-school as part of Computer Applications Technology.

            I am a high-school graduate. I attended Hoërskool Sybrand van Niekerk in Sabie, Mpumalanga S.A. where I obtained
            a bachelor's pass for my NSC matriculation.
          </p>
        </div>
      </div>
    </section>

    <section class="p-4 m-4">
      <h2 class="text-center mb-2 mt-2">
        Tech Stack <i class="fa-solid fa-computer"/>
      </h2>
      <p class="text-center">
        Below are all of the tools I use most often:
      </p>
      <table class="text-2xl w-full text-center">
        <!-- head -->
        <thead>
        <tr>
          <th>Category</th>
          <th>Tools</th>
        </tr>
        </thead>

        <tbody>
        <!-- row 1 -->
        <tr>
          <td>Backend</td>
          <td>Python · Django · Django Rest Framework</td>
        </tr>
        <!-- row 2 -->
        <tr>
          <td>Frontend</td>
          <td>HTML · CSS · Tailwindcss · Nuxt.js · Vue.js</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <td>Database</td>
          <td>PostgreSQL(Prod) · SQLite(Dev)</td>
        </tr>
        <!-- row 4 -->
        <tr>
          <td>Tooling</td>
          <td>Render(hosting) · Cloudflare · Linux</td>
        </tr>
        <!-- row 5 -->
        <tr>
          <td>Misc</td>
          <td> JIRA · Confluence · Notion</td>
        </tr>
        </tbody>

      </table>

    </section>
  </main>
</template>

<style scoped>

</style>