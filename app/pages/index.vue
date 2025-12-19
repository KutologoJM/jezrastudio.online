<script setup lang="ts">
</script>

<template>
  <main class="prose-xl">
    <section class="card flex-col items-center">
      <NuxtImg
          src="/images/avatar.jpg"
          alt="alt"
          class="max-w-sm rounded-lg shadow-2xl"
      />

      <div>
        <h2 class="text-center font-bold mt-2 mb-2">Kutologo Jezra Mashego</h2>
        <h3 class="text-center mt-2 mb-2">Junior Backend Developer - (Django & Python)</h3>
        <p class="text-center">
          <i class="fa-solid fa-location-dot"/>
          Pretoria Metropolitan Area, South Africa
        </p>
      </div>

      <div class="">
        <div class="flex gap-2 mt-5">
          <a href="https://github.com/KutologoJM"><i class="fa-brands fa-github fa-2xl"/></a>

          <a href="https://linkedin.com/in/kutologomashego"><i class="fa-brands fa-linkedin fa-2xl"/></a>

          <a href="mailto:kutologojm@jezrastudio.online"><i class="fa-regular fa-envelope fa-2xl"/></a>

          <a href="https://www.upwork.com/freelancers/~017e328370006c02df?mp_source=share"><i
              class="fa-brands fa-square-upwork fa-2xl"/></a>

        </div>
      </div>

      <section class="grid grid-cols-1 m-4 p-4 gap-6">
        <div>
          <h3 class="text-center">
            About me
          </h3>
          <div class="border rounded-lg p-2">
            I am an aspiring Junior Django Developer with a focus on learning more about the language and how best
            to make reliable and useful web applications.

            <figure class="flex">
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python badge">
            <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django badge">
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwindcss badge">
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker badge">
            <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL badge">
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Github badge">
            <img src="https://img.shields.io/badge/Freelancer-00A4FF?style=for-the-badge&logo=freelancer&logoColor=white" alt="Freelancer badge">
            <img src="https://img.shields.io/badge/Open%20Source-3DA639?style=for-the-badge&logo=open-source-initiative&logoColor=white" alt="Open Source badge">
          </figure>

            You can learn more in the
            <NuxtLink to="/about-me" class="text-primary link">about me section</NuxtLink>
            .
          </div>


        </div>
        <div id="work_experience">
          <h3 class="text-center">
            Work Experience
          </h3>
          <div class="border rounded-lg p-2">

            <h4 class="mt-2 mb-2">
              Feb 2023 - Dec 2024
            </h4>
            <ul class="list-disc">
              <li>
                Studying cybersecurity fundamentals with a focus on ethical hacking, networking, and penetration testing
                techniques.
              </li>
              <li>
                Learning and studying python fundamentals while creating simple scripts such as the ones in <a
                  href="https://github.com/KutologoJM/growth-showcase" class="link text-primary">this repo.</a>
              </li>
            </ul>

            <h4 class="mt-2 mb-2">
              Jan 2025 - Present
            </h4>
            <ul class="list-disc">
              <li>
                Learning about Django and backend best practices.
              </li>
              <li> Experimenting with Nuxt and Vue.js for front-end prototyping.
              </li>
              <li>
                Current active projects can be found in the
                <NuxtLink to="/my-projects" class="text-primary link">projects section</NuxtLink>
                .
              </li>
            </ul>

            <section class="">
              <h3 class="text-center">
                📊 GitHub Stats
              </h3>
              <figure class="flex gap-4">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=KutologoJM&show_icons=true&theme=github_dark&hide_border=true"
                  alt="my github stats">
              <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=KutologoJM&layout=compact&theme=github_dark&hide_border=true"
                  alt="my github top languages used">

              </figure>
              <h3 class="text-center">
                🕹️ Activity Graph
              </h3>
              <figure class="flex">
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=KutologoJM&theme=github-dark&hide_border=true"
                  alt="github activity graph">
              </figure>

            </section>

          </div>
        </div>
      </section>

    </section>

  </main>
</template>

<style scoped>

</style>