// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["nuxt-graphql-client"],
	"graphql-client": {
		codegen: false, // prevent instrospection error on woo
		clients: {
			default: {
				host: `${process.env.NUXT_PUBLIC_SHOP_API}`,
				corsOptions: {
					mode: "cors",
					credentials: "include",
				},
			},
		},
	},
});
