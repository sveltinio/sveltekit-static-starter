<script>
	export let UA_ID = '';
	window.ga =
		window.ga ||
		function () {
			(ga.q = ga.q || []).push(arguments);
		};
	ga.l = +new Date();
	ga('create', { UA_ID }, 'auto');
	ga('send', 'pageview');
</script>
