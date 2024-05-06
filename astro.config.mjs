import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UCADocs',
			social: {
				github: 'https://github.com/EloyChavezDev/DocUCA',
			},
			sidebar: [
				{
					label: 'Año 2024',
					items:[
						{label: 'Resumen', link: '/2024/Resumen/' },
						{
							label: 'Enero',
							collapsed: true,
							badge: {text: 'Delayed work', variant: 'caution'},
							autogenerate: { directory: '2024/Enero' },
						},
						{
							label: 'Febrero',
							collapsed: true,
							badge: {text: 'Delayed work', variant: 'caution'},
							autogenerate: { directory: '2024/Febrero' },
						},
						{
							label: 'Marzo',
							collapsed: true,
							badge: {text: 'WIP', variant: 'caution'},
							autogenerate: { directory: '2024/Marzo' },
						},
						{
							label: 'Abril',
							collapsed: true,
							badge: 'WIP',
							autogenerate: { directory: '2024/Abril' },
						},
						{
							label: 'Mayo',
							collapsed: true,
							badge: 'New',
							autogenerate: { directory: '2024/Mayo' },
						}
					]
				},
			],
		}),
	],
});