<script>
	export let resource;
	export let slug;
	export let headings;
	export let withChildren;

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	/**
	 * @param {{ preventDefault: () => void; currentTarget: any; }} event
	 */
	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<nav id="toc_container">
	<div on:click={toggle}>
		<button aria-label="table of contents" aria-expanded={isOpen}> Table of Contents </button>
	</div>
	{#if isOpen}
		<ul id="toc_list">
			{#each headings as heading}
				<li id={`toc_item_${heading.id}`}>
					<a href={`/${resource}/${slug}#${heading.id}`} on:click={handleAnchorClick}
						>{heading.title}</a
					>
					{#if withChildren}
						{#if heading.children}
							<ul id={`toc_children_list_${heading.id}`}>
								{#each heading.children as child}
									<li id={`toc_child_item_${child.id}`}>
										<a href={`/${resource}/${slug}#${child.id}`} on:click={handleAnchorClick}
											>{child.title}</a
										>
									</li>
								{/each}
							</ul>
						{/if}
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</nav>
