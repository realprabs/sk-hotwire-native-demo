<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let props: HTMLAnchorAttributes & { children: Snippet } = $props();

	function handleClick(event: MouseEvent) {
		if (
			!props.href ||
			!window.HotwireNavigator.enabled ||
			!window.HotwireNavigator.canNavigate(new URL(props.href, window.location.origin))
		) {
			return;
		}

		event.preventDefault();
		window.HotwireNavigator.visitProposedToLocation(new URL(props.href, window.location.origin), {
			action: props['data-sveltekit-replacestate'] ? 'replace' : 'advance'
		});
	}
</script>

<a {...props} onclick={handleClick}>
	{@render props.children()}
</a>
