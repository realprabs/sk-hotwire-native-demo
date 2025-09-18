<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import clsx from 'clsx';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';

	let { children, data }: LayoutProps = $props();
</script>

<ProgressBar displayThresholdMs={500} />

<div
	class={clsx('prose prose-stone mx-auto max-w-screen-md px-4 py-6', {
		'native-app': data.isNativeApp
	})}
>
	{@render children()}
</div>
