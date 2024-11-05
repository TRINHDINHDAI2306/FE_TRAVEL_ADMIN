import { createInstance } from 'i18next'
import { last } from 'lodash-es'
import { initReactI18next } from 'react-i18next'

function loadLangFile(lang = 'ja') {
  let data: Record<string, string> = {}
  Object.entries(import.meta.glob('../locales/**/*.json', { eager: true })).map(([key, value]: any) => {
    const arrKey = key?.split('/')
    const fileName = (last(arrKey) as string)?.split('.')[0]
    if (arrKey[2] === lang) {
      data = { ...data, ...{ [fileName]: value.default } }
    }
  })
  return data
}

export const I18nInstance = createInstance()

const localsConfigs = {
  ja: { ...loadLangFile() },
  vi: {
    ...loadLangFile('vi'),
  },
}

I18nInstance.use(initReactI18next).init({
  lng: 'vi',
  resources: localsConfigs,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})
