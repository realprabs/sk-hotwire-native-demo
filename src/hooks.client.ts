import { goto } from '$app/navigation';
import { tick } from 'svelte';
import 'hotwire-native-bolt';

window.HotwireNavigator.setStartVisitHandler(async (location, _restorationIdentifier, options) => {
	console.log(location, options);
	if(options.action === 'restore' && location.href !== window.location.href) {
		return history.back();
	}
	return goto(location.href, { replaceState: options.action === 'replace' });
});

tick().then(() => {
	document.dispatchEvent(new Event('turbo:load'));
});
