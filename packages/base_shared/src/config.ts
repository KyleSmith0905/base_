import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createJiti } from 'jiti';
import type { BaseScoreConfig } from './types';

export const getBaseScoreConfig = async (configPath: string) => {
	const jiti = createJiti(import.meta.url, { debug: true });

	const configurationFile = resolve(configPath, 'config.ts');
	const configurationFileUrl = pathToFileURL(configurationFile).toString();

	const config = (await jiti.import(configurationFileUrl)) as { default: BaseScoreConfig };

	return config.default;
};