<script lang="ts">
    import Link from "$lib/components/link.svelte";
    import Icon from "@iconify/svelte";

    let props: {href: string; icon: string; label: string} = $props();
</script>

<Link class="md:rounded-lg p-4 bg-white flex md:flex-col items-center gap-3" href={props.href}>
    <Icon icon={props.icon} class="size-6 md:size-10 text-blue-400" />
    <div class="flex-1">{props.label}</div>
</Link>