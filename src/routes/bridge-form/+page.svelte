<svelte:head>
	<title>Bridge Components</title>
</svelte:head>

<h1>Bridge Components</h1>
<h3>Form example</h3>
<p>
	This screen contains a form associated with a Bridge form component. It contains a web submit
	button that submits the form and redirects to a success page after a short delay.
</p>
<p>
	Since the Turbo Native demo app supports the form component, the web submit button is hidden and
	is replaced with a native button in the top-right native app bar.
</p>
<p>
	Displaying the submit button in the top-right of the screen is a typical convention in mobile
	apps, has the benefit of never being hidden underneath the virtual keyboard, and is always visible
	no matter where you're scrolled on the page.
</p>

<form class="space-y-4 not-prose">
	<label for="firstName" class="block">
		<span>What is your first name?</span>
		<input
			type="text"
			id="firstName"
			name="firstName"
			placeholder="Type your first name…"
			class="form-input rounded-md border-stone-300 block w-full"
		/>
	</label>

	<label for="lastName" class="block">
		<span>What is your last name?</span>
		<input
			type="text"
			id="lastName"
			name="lastName"
			placeholder="Type your last name…"
			class="form-input rounded-md border-stone-300 block w-full"
		/>
	</label>

	<button type="submit" class="btn">Submit Form</button>
</form>
