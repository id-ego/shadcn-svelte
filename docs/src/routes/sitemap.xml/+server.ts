import type { RequestHandler } from "./$types.js";
import { getFullNavItems } from "$lib/navigation.js";
import { registryCategories } from "$lib/registry/registry-categories.js";

const SITE_URL = "https://shadcn-svelte.docsforall.com";

export const prerender = true;

const CHART_TYPES = ["area", "bar", "line", "pie", "radar", "radial", "tooltip"] as const;

export const GET: RequestHandler = async () => {
	// Static pages (excluding redirect pages like /examples)
	const staticPages = [
		{ url: "/", priority: 1.0 },
		{ url: "/blocks", priority: 0.8 },
		{ url: "/themes", priority: 0.7 },
		{ url: "/colors", priority: 0.7 },
		{ url: "/examples/dashboard", priority: 0.6 },
		{ url: "/examples/tasks", priority: 0.6 },
		{ url: "/examples/playground", priority: 0.6 },
		{ url: "/examples/authentication", priority: 0.6 },
	];

	// Chart pages
	const chartPages = CHART_TYPES.map((type) => ({
		url: `/charts/${type}`,
		priority: 0.7,
	}));

	// Block category pages
	const blockCategories = registryCategories
		.filter((c) => !c.hidden)
		.map((c) => ({
			url: `/blocks/${c.slug}`,
			priority: 0.7,
		}));

	// Doc pages from navigation (already has correct /docs/... URLs)
	const docPages = getFullNavItems()
		.filter((item) => item.href && !item.href.endsWith(".txt") && !item.href.endsWith("/") && !item.external)
		.map((item) => ({
			url: item.href!,
			priority: 0.8,
		}));

	const allPages = [...staticPages, ...chartPages, ...blockCategories, ...docPages];

	// Remove duplicates by URL
	const uniquePages = Array.from(new Map(allPages.map((p) => [p.url, p])).values());

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join("\n")}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
};
