<?php session_start(); $url = 'https://inilah.com'; ?>

<div class="container mx-auto mb-12">
  <div class="flex justify-start">
    <div
    class="w-[500px] rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
      <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Hallo, <?=$_SESSION['nama']; ?>
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        <?=$_SESSION['message']; ?>
      </p>
      <button
      onclick="window.open('<?=$url;?>','popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;"
      type="button"
      class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      data-te-ripple-init
      data-te-ripple-color="light">
        Inilah Dotcom
      </button>
    </div>
  </div>
</div>