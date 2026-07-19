import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImageUrl: z
			.string()
			.refine((value) => value.startsWith('/') || URL.canParse(value), {
				message: 'heroImageUrl must be a local / path or a valid URL',
			})
			.optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { blog };
