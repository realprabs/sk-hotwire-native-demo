<script lang="ts">
	import { applyAction, enhance } from '$app/forms';

	import { type SubmitFunction } from '@sveltejs/kit';

	const submissionHandler: SubmitFunction = async ({ action }) => {
		window.Turbo.adapter?.formSubmissionStarted({
			location: action
		});
		return async ({ result }) => {
			if (result.type === 'redirect' && window.Turbo.adapter) {
				window.Turbo.adapter.formSubmissionFinished({
					location: action
				});
				window.Turbo.adapter.visitProposedToLocation(
					new URL(result.location, window.location.origin),
					{
						action: 'advance'
					}
				);
			} else {
				await applyAction(result);
			}
		};
	};
</script>

<svelte:head>
	<title>A Modal Webpage</title>
</svelte:head>

<h1>A Modal Webpage</h1>
<p>
	This screen was presented as a modal based on the path configuration file. Submitting this form
	will redirect to a success page. The native app will receive that visit proposal and initiate a
	new visit. Notice that submitting the form will also cause it to dismiss the modal. That's handled
	by the demo app's router.
</p>
<form method="post" use:enhance={submissionHandler}>
	<button class="btn" type="submit">Submit</button>
</form>
