<script>
  import Link from '$lib/components/link.svelte';
</script>

<svelte:head>
    <title>How’d You Get Here?</title>
</svelte:head>

<h1>How’d You Get Here?</h1>
<p>When you tap the link to this page, Turbo proposes a visit to the app to decide how to handle the URL. In this case, it chooses to present a Turbo-based web screen.
Go back and try Intercept with a native view to see how to load a native screen instead.</p>
<p>This link will be presented using the same <code>advance</code> visit presentation:</p>
<Link href="/two">Advance to another webpage</Link>
<p>This performs a <code>replace</code> visit instead:</p>
<Link href="/two?action=replace" data-sveltekit-replacestate>Replace with another webpage</Link>
<p>This performs a <code>replace</code> visit to the current page, refreshing its content:</p>
<Link href="/one">Refresh</Link>
