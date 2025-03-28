<script lang="ts">
	import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<svelte:head>
    <title>Push or Replace?</title>
</svelte:head>

<h1>Push or Replace?</h1>
<p>Isn’t this fun?</p>
<p>This screen was pushed on the navigation stack through the <code>{data.action}</code> action. You can go back to the previous screen by tapping the Back button.</p>

<p>Go back and try the replace link to see the difference.</p>
