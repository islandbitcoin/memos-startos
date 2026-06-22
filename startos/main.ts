import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Memos…'))

  const subcontainer = await sdk.SubContainer.of(
    effects,
    { imageId: 'memos' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/var/opt/memos',
      readonly: false,
    }),
    'memos-sub',
  )

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer,
    exec: {
      command: sdk.useEntrypoint(),
      env: {
        MEMOS_PORT: String(uiPort),
        MEMOS_MODE: 'prod',
        MEMOS_DRIVER: 'sqlite',
      },
    },
    ready: {
      display: i18n('Memos Web UI'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The Memos server is ready'),
          errorMessage: i18n('The Memos server is not ready'),
        }),
    },
    requires: [],
  })
})
