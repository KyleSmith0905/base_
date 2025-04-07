import type { BaseScoreConfig } from 'base_shared';

const config = await $fetch('/api/config');

export const useBaseScoreConfig = () => {
	return config.config as BaseScoreConfig;
};
