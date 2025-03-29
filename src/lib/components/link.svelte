<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let props: HTMLAnchorAttributes & { children: Snippet } = $props();

	// Link must be to the same origin and not to a file
	function canNavigate(url: URL) {
		const fileExtensions = [
			".7z", ".aac", ".apk", ".avi", ".bmp", ".bz2", ".css", ".csv", ".deb", ".dmg", ".doc",
			".docx", ".exe", ".gif", ".gz", ".heic", ".heif", ".ico", ".iso", ".jpeg", ".jpg",
			".js", ".json", ".m4a", ".mkv", ".mov", ".mp3", ".mp4", ".mpeg", ".mpg", ".msi",
			".ogg", ".ogv", ".pdf", ".pkg", ".png", ".ppt", ".pptx", ".rar", ".rtf",
			".svg", ".tar", ".tif", ".tiff", ".txt", ".wav", ".webm", ".webp", ".wma", ".wmv",
			".xls", ".xlsx", ".xml", ".zip"
		];

		const hasFileExtension = fileExtensions.some(ext => url.pathname.endsWith(ext));
		return url.origin === window.location.origin && !hasFileExtension;
	}

	function handleClick(event: MouseEvent) {
		if (!props.href || !window.Turbo.adapter || !canNavigate(new URL(props.href, window.location.origin))) return;

		event.preventDefault();
		window.Turbo.adapter.visitProposedToLocation(new URL(props.href, window.location.origin), {
			action: props['data-sveltekit-replacestate'] ? 'replace' : undefined
		});
	}
</script>

<a {...props} onclick={handleClick}>
	{@render props.children()}
</a>
