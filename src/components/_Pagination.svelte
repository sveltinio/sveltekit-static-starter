<script>
	export let rows;
	export let perPage;
	export let trimmedRows;
	$: totalRows = rows.length;
	$: currentPage = 0;
	$: totalPages = Math.ceil(totalRows / perPage);
	$: start = currentPage * perPage;
	$: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;
	$: trimmedRows = rows.slice(start, end + 1);
</script>

{#if totalRows && totalRows > perPage}
	<div class="paginatatorContainer">
		<button
			on:click={() => (currentPage -= 1)}
			disabled={currentPage === 0 ? true : false}
			aria-label="left arrow icon"
			aria-describedby="prev"
			class=""
		>
			&larr;
		</button>
		<span id="prev" class="sr-only">Load previous {perPage} rows</span>
		<p class="">
			Page {currentPage + 1} / {totalPages}
		</p>
		<button
			on:click={() => (currentPage += 1)}
			disabled={currentPage === totalPages - 1 ? true : false}
			aria-label="right arrow icon"
			aria-describedby="next"
			class=""
		>
			&rarr;
		</button>
		<span id="next" class="sr-only">Load next {perPage} rows</span>
	</div>
{/if}

<style>
	.paginatatorContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
		margin-top: 16px;
		gap: 4px;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
