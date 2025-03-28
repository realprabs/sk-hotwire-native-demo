<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";

    let props: HTMLAnchorAttributes & {children: Snippet;} = $props();
</script>

<a {...props}>
    {@render props.children()}
</a>
