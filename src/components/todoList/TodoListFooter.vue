<script setup></script>
<template>
<!-- FOOTER DE LISTE -->
        <div
          class="border-t border-slate-300 bg-slate-300 px-4 py-3 sm:px-5 text-slate-600"
          role="contentinfo"
          aria-label="Todo list footer"
        >
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <!-- Compteur avec aria-live -->
            <p class="text-sm">
              <span
                id="items-left"
                class="font-medium"
                aria-live="polite"
                aria-atomic="true"
                >2</span
              >
              items left
            </p>
          </div>
        </div>
</template>
<style scoped></style>