<script lang="ts">
	import thumbnail from '$lib/images/image_thumbnail.jpg';
	import fullImage from '$lib/images/image.jpg';
	import Link from '$lib/components/link.svelte';
</script>

<svelte:head>
	<title>Handling Files</title>
</svelte:head>

<h1>Handling Files</h1>
<p>
	Here's a link to an image. Turbo doesn't handle non-html links, so it will ignore this link. By
	default, it will open in the browser. We've added special handling in the app for files on the
	same domain to open in-app instead.
</p>
<Link href={fullImage}>
	<img src={thumbnail} alt="Thumbnail" />
</Link>
<p>Image credit to <a href="https://unsplash.com/photos/70l1tDAI6rM">Chris Lee via Unsplash</a></p>
