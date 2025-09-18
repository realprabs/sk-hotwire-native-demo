<script lang="ts">
	import Link from '$lib/components/link.svelte';
	import Icon from '@iconify/svelte';

	let props: { href: string; icon: string; label: string } = $props();
</script>

<Link class="flex items-center gap-3 bg-white p-4 md:flex-col md:rounded-lg" href={props.href}>
	<Icon icon={props.icon} class="size-6 text-blue-400 md:size-10" />
	<div class="flex-1">{props.label}</div>
</Link>
