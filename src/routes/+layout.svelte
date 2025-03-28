<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="max-w-screen-md mx-auto prose prose-stone px-4 py-6">
	{@render children()}
</div>
