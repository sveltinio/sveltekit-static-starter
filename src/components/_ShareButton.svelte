<script>
	import ShareAndroidIcon from '@indaco/svelte-iconoir/icons/ShareAndroidIcon.svelte';
	import MailIcon from '@indaco/svelte-iconoir/icons/MailIcon.svelte';
	import TwitterIcon from '@indaco/svelte-iconoir/icons/TwitterIcon.svelte';
	import LinkedInIcon from '@indaco/svelte-iconoir/icons/LinkedInIcon.svelte';
	import FacebookIcon from '@indaco/svelte-iconoir/icons/FacebookIcon.svelte';
	import InstagramIcon from '@indaco/svelte-iconoir/icons/InstagramIcon.svelte';
	import ChatLinesIcon from '@indaco/svelte-iconoir/icons/ChatLinesIcon.svelte';
	let isOpen = false;

	const toggle = () => (isOpen = !isOpen);
</script>

<div class="share">
	<button class="share-btn" on:click|preventDefault={toggle} class:active={isOpen}>
		<ShareAndroidIcon />
	</button>
	<div class="share-options" class:active={isOpen}>
		<div class="social-media">
			<button class="social-media-btn"><MailIcon /></button>
			<button class="social-media-btn"><ChatLinesIcon /></button>
			<button class="social-media-btn"><InstagramIcon /></button>
			<button class="social-media-btn"><TwitterIcon /></button>
			<button class="social-media-btn"><FacebookIcon /></button>
			<button class="social-media-btn"><LinkedInIcon /></button>
		</div>
		<div class="link-container">
			<p class="link">https://example.com/share</p>
			<button class="copy-btn">copy</button>
		</div>
	</div>
</div>

<style>
	.share {
		display: flex;
		flex-direction: row;
	}
	.share-btn {
		position: relative;
		border: none;
		color: #ff7d7d;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		font-size: 15px;
		padding-top: 2.5px;
		padding-right: 3px;
		cursor: pointer;
		transition: transform 0.3s ease;
	}

	.share-options {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		padding: 20px;
		color: #fff;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		border-bottom-left-radius: 20px;
		background: rgba(15, 15, 15, 0.5);
		transform-origin: bottom left;
		opacity: 0;
		transition: 0.5s;
		transition-delay: 0.5s;
	}

	.share-options.active {
		transform: translateX(10px);
		transition: transform 0.5s ease;
		opacity: 1;
	}

	.social-media {
		opacity: 0;
		transition: 0.5s;
		transition-delay: 0s;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 5px 0;
	}

	.social-media-btn {
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #000;
		color: #fff;
		font-size: 15px;
		cursor: pointer;
		margin: 0 5px;
		padding-left: 9px;
		text-align: center;
	}

	.social-media-btn:nth-child(1) {
		background: #ffa654;
	}

	.social-media-btn:nth-child(2) {
		background: #25d366;
	}

	.social-media-btn:nth-child(3) {
		background: #e4405f;
	}

	.social-media-btn:nth-child(4) {
		background: #1da1f2;
	}

	.social-media-btn:nth-child(5) {
		background: #1877f2;
	}

	.social-media-btn:nth-child(6) {
		background: #0a66c2;
	}

	.link-container {
		opacity: 0;
		transition: 0.5s;
		transition-delay: 0s;
		width: 100%;
		position: relative;
		height: 30px;
		display: inline-flex;
		align-items: center;

		border-radius: 40px;
		background-color: #fff;
		overflow: hidden;
		padding-left: 10px;
	}

	.link {
		width: 70%;
		height: 100%;
		line-height: 30px;
		color: #000;
		font-size: 14px;
	}

	.copy-btn {
		flex-grow: 1;
		cursor: pointer;
		background: #000;
		border-radius: 40px;
		color: #fff;
		border: none;
		height: 100%;
		text-transform: capitalize;
		font-size: 14px;
	}

	.share-options.active .social-media,
	.share-options.active .link-container {
		opacity: 1;
		transition: 0.5s;
		transition-delay: 0.5s;
	}
</style>
