import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'memos',
  title: 'Memos',
  license: 'MIT',
  packageRepo: 'https://github.com/islandbitcoin/memos-startos',
  upstreamRepo: 'https://github.com/usememos/memos',
  marketingUrl: 'https://usememos.com',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    memos: {
      source: { dockerTag: 'neosmemo/memos:stable' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
