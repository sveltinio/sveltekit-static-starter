<script context="module">
	import { website } from '$config/website.js';
	import ExternalLink from '$components/_ExternalLink.svelte';
</script>

<svelte:head>
	<title>Home | {website.name}</title>
</svelte:head>

<section class="hero">
	<div class="content">
		<div class="wrapper">
			<div class="subwrapper">
				<div class="herotext">
					<h1>Your Sveltin project is <span class="accent">up & running!</span></h1>

					<div class="buttons-wrapper">
						<ExternalLink
							id="learnMoreLink"
							name="learnMore"
							url="https://docs.sveltin.io/tutorials"
							alt="link to the tutorial pages"
							class="btn btn-accent">Learn More</ExternalLink
						>

						<ExternalLink
							id="documentationLink"
							name="docs"
							url="https://docs.sveltin.io"
							alt="link to the documentation website"
							class="btn btn-base">Read the Docs</ExternalLink
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
