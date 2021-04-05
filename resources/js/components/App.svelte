<script>
    // import { onMount } from "svelte";
    // import auth from "./authService";
    //import { isAuthenticated, user, user_tasks, tasks } from "./store";
    import AppMainData from "./FunctionalComponents/AppMainData.svelte";

    // import themes from "./theme/_smui-theme.scss";
    // import { ThemeWrapper, ThemeToggle } from "svelte-themer";

    // let auth0Client;

    // onMount(async () => {
    //   auth0Client = await auth.createClient();

    //   isAuthenticated.set(await auth0Client.isAuthenticated());
    //   user.set(await auth0Client.getUser());
    // });

    // function login() {
    //   auth.loginWithPopup(auth0Client);
    // }

    // function logout() {
    //   auth.logout(auth0Client);
    // }
</script>

<!-- <ThemeWrapper mode="dark" {themes}> -->
<main>
    <!-- <ThemeToggle /> -->
    <AppMainData />
</main>
<!-- </ThemeWrapper> -->

<!-- App Bar -->
<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/#">Task Manager</a>

    <div class="collapse navbar-collapse" id="navbarText">
      <div class="navbar-nav mr-auto user-details">
        {#if $isAuthenticated}
          <span class="text-white"
            >&nbsp;&nbsp;{$user.name} ({$user.email})</span
          >
        {:else}<span>&nbsp;</span>{/if}
      </div>
      <span class="navbar-text">
        <ul class="navbar-nav float-right">
          {#if $isAuthenticated}
            <li class="nav-item">
              <a class="nav-link" href="/#" on:click={logout}>Log Out</a>
            </li>
          {:else}
            <li class="nav-item">
              <a class="nav-link" href="/#" on:click={login}>Log In</a>
            </li>
          {/if}
        </ul>
      </span>
    </div>
  </nav>

  <!-- Application -->

<!-- {#if !$isAuthenticated}
        <div class="container mt-5">not logged</div>
    {:else}
        <AppMainData />
    {/if} -->
<style>
    :global(html) {
        background-color: var(--theme-colors-background, initial);
        color: var(--theme-colors-text, initial);
    }
    main {
        color: var(--theme-colors-text, initial);
        background-color: var(--theme-colors-background, initial);
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
</style>
