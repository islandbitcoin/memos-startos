import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.29.1:0',
  releaseNotes: {
    en_US: 'Initial StartOS release of Memos (stable tag, v0.29.1).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
