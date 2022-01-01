<script>
	import GitHubButton from '$components/github/GitHubButton.svelte';
	export let username;
	export let repo;
</script>

<div class="segment">
	<div class="row">
		<ul class="list-inline">
			<li>
				<GitHubButton {username} {repo} action="star" />
			</li>
			<li>
				<GitHubButton {username} {repo} action="follow" />
			</li>
		</ul>
	</div>
</div>

<style>
	.segment {
		display: flex;
		align-items: center;
		justify-content: center;
		/*width: 100%;*/
		margin: 0 auto;
		padding-right: 15px;
		padding-left: 15px;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
	}

	.list-inline {
		padding-left: 0;
		list-style: none;
	}
	.list-inline > li {
		display: inline-block;
		padding-right: 5px;
		padding-left: 5px;
		margin: 0;
	}

	@media (min-width: 768px) {
		.segment {
			margin: 0 10px;
			padding-right: 0px;
			padding-left: 0px;
		}
	}
</style>
