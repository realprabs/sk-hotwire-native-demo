<script lang="ts">
	import type { Snippet } from 'svelte';

	let props: { children: Snippet } = $props();
</script>

<div
	class="not-prose grid-cols-2 gap-4 divide-y divide-stone-200 overflow-hidden rounded-lg md:grid md:divide-y-0"
>
	{@render props.children()}
</div>
