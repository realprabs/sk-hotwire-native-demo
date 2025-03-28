<script lang="ts">
	import type { Snippet } from "svelte";

    let props: {children: Snippet;} = $props();
</script>

<div class="not-prose md:grid grid-cols-2 gap-4 divide-y divide-stone-200 md:divide-y-0 rounded-lg overflow-hidden">
    {@render props.children()}
</div>