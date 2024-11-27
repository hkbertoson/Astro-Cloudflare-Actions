import {defineAction} from 'astro:actions';
import {z} from 'astro:schema';

export const server = {
	contactForm: defineAction({
		accept: 'form',
		input: z.object({
			firstName: z.string().min(1),
		}),
		handler: async (data) => {
			return true;
		},
	}),
};
