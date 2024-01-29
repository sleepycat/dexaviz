import React from 'react'
import { useLingui } from '@lingui/react'
import Locale from './locales'

function LocaleSwitcher() {
  const { i18n } = useLingui()

  const handleLocaleChange = (newLocale) => {
    i18n.activate(newLocale)
  }

  return (
    <div>
      <button onClick={() => handleLocaleChange(Locale.ENGLISH)}>
        English
      </button>
      <button onClick={() => handleLocaleChange(Locale.FRENCH)}>
        Français
      </button>
    </div>
  )
}

export default LocaleSwitcher
