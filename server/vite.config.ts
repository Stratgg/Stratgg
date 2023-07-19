import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { VitePluginNode } from 'vite-plugin-node'

export default defineConfig({
	envDir: '../',
	envPrefix: ['SERVER_', 'CLIENT_'],

	resolve: {
		alias: {
			'@server': resolve(__dirname),
		},
	},
	plugins: VitePluginNode({
		appPath: 'src/main.ts',
		adapter: 'express',
		//this donest matter because we are using vite-node during dev
	}),
})
