<template>
  <div class="text-center p-8 bg-white shadow-xl rounded-xl">
    <div>
      <slot name="header" />
    </div>
    <div class="font-extrabold text-lg my-6">
      <slot name="title" />
    </div>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>
