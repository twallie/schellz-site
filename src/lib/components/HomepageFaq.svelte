<script lang="ts">
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	import type { FAQItem } from '$lib/types';
	const faqItems: FAQItem[] = [
		{
			question: 'How is the parking?',
			answer:
				'Please park in the front parking lot or on the street. Head to the front entrance and select "Schellz Pizza Co" on the call box. Our kitchen is down the hall #7.'
		},
		{
			question: 'How do I reheat Schellz pizzas?',
			answer:
				'Due to our long fermentation and our style of dough, you will be surprised to know that Schellz Pizza is quite delicious 2-3 days after purchase. Just reheat in the oven, wrapped in foil on a baking sheet, at 400f for 10-12 minutes. (If coming from a cold refrigerator; please add 5 mins). Ovens vary, so please check your pizza at 5 min intervals.'
		}
	];
</script>

<HomepageInfoBox id="faq" title="FAQ" {faqItems} />
