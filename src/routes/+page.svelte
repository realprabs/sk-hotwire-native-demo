<script lang="ts">
	import NavItem from "$lib/components/nav_item.svelte";
    import NavGroup from "$lib/components/nav_group.svelte";
</script>

<svelte:head>
    <title>Welcome to SvelteKit</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>This demo app will help you get acquainted with the framework.</p>
<h3>Basic features</h3>
<NavGroup>
    <NavItem href="/one" icon="material-symbols:directions-outline" label="Navigate to another page" />
    <NavItem href="/slow" icon="fluent:slow-mode-24-regular" label="Open a slow-loading page" />
    <NavItem href="/long" icon="hugeicons:scroll" label="Try scroll restoration" />
    <NavItem href="/nonexistent" icon="tabler:error-404-off" label="Hit an HTTP 404 error" />
</NavGroup>
<h3>Advanced features</h3>
<NavGroup>
    <NavItem href="/protected" icon="material-symbols:lock-outline" label="Intercept unauthorized access" />
    <NavItem href="/new" icon="material-symbols:open-in-new" label="Load a page modally" />
    <NavItem href="/numbers" icon="bi:phone" label="Intercept with a native view" />
    <NavItem href="https://svelte.dev/" icon="material-symbols:link" label="Follow an external link" />
    <NavItem href="/files" icon="material-symbols:folder-outline" label="See how files work" />
    <NavItem href="/follow" icon="material-symbols:arrow-forward" label="Follow a redirect" />
    <NavItem href="/external-redirect" icon="material-symbols:open-in-new" label="Follow an external redirect" />
</NavGroup>
<h3>Bridge components</h3>
<NavGroup>
    <NavItem href="/bridge-form" icon="mdi:form-outline" label="Form example" />
    <NavItem href="/bridge-overflow" icon="carbon:overflow-menu-vertical" label="Overflow menu example" />
</NavGroup>

