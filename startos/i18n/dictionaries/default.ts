export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting Memos…': 0,
  'Memos Web UI': 1,
  'The Memos server is ready': 2,
  'The Memos server is not ready': 3,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
