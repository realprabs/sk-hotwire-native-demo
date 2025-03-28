<svelte:head>
    <title>Bridge Components</title>
</svelte:head>

<h1>Bridge Components</h1>
<h3>Overflow + Menu example</h3>
<p>This screen contains a button associated with a Bridge overflow-menu component. The page also contains a web-based menu associated with a Bridge menu component that contains several options to choose from.</p>
<p>Since the Turbo Native demo app supports the overflow-menu component and the menu component, the web button to open the menu is hidden and replaced with a native 3-dot menu in the top-right native app bar. Tapping on that 3-dot menu will display a native menu driven by the menu component.</p>
<p>Hiding the menu options behind the 3-dot overflow-menu is a typical convention in mobile apps. It provides a common place for infrequently used actions and makes more room on the screen for more important actions.</p>
<button class="btn">Open Menu</button>