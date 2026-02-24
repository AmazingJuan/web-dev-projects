<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <aside class="fixed flex h-full w-64 flex-col bg-gray-800 text-white shadow-lg">
        <div class="flex-1 p-6">
          <div class="mb-8 flex items-center">
            <i class="fas fa-graduation-cap mr-3 text-2xl text-blue-400"></i>
            <span class="text-xl font-bold">Library Dashboard</span>
          </div>

          <nav class="space-y-2">
            <RouterLink
              to="/"
              class="flex items-center rounded-lg px-4 py-3 transition duration-200 hover:bg-gray-700"
            >
              <i class="fas fa-home mr-3"></i>
              <span>Home</span>
            </RouterLink>

            <RouterLink
              to="/about"
              class="flex items-center rounded-lg px-4 py-3 transition duration-200 hover:bg-gray-700"
            >
              <i class="fas fa-info-circle mr-3"></i>
              <span>About</span>
            </RouterLink>
            <RouterLink
              to="/books"
              class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              <i class="fas fa-book mr-3"></i>
              <span>Books</span>
            </RouterLink>

          </nav>
        </div>

        <!-- Sidebar footer -->
        <div class="mt-auto w-full border-t border-gray-700 p-6">
          <div class="flex items-center">
            <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <i class="fas fa-user text-white"></i>
            </div>

            <div>
              <p class="text-sm font-semibold">Admin User</p>
              <p class="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main content area -->
      <div class="ml-64 flex flex-1 flex-col overflow-hidden">
        <!-- Top header -->
        <header class="border-b border-gray-200 bg-white shadow-sm">
          <div class="flex items-center justify-between px-6 py-4">
            <h1 class="text-2xl font-bold text-gray-800">
              {{ $route.meta.title }}
            </h1>

            <div class="flex items-center space-x-4">
              <button
                class="rounded-lg p-2 text-gray-600 transition duration-200 hover:bg-gray-100"
              >
                <i class="fas fa-search"></i>
              </button>

              <div
                class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-500 transition duration-200 hover:bg-blue-600"
              >
                <i class="fas fa-user text-white"></i>
              </div>
            </div>
          </div>
        </header>

        <!-- Main content -->
        <main class="flex-1 overflow-y-auto p-6">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
