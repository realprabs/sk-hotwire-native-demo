<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import clsx from 'clsx';

	let { children, data }: LayoutProps = $props();
</script>

<div
	class={clsx('prose prose-stone mx-auto max-w-screen-md px-4 py-6', {
		'native-app': data.isNativeApp
	})}
>
	{@render children()}
</div>
