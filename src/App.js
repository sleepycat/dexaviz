import React from 'react'
import { useLingui } from '@lingui/react'
import { Trans, Plural } from '@lingui/macro'
import LocaleSwitcher from './LocaleSwitcher'

export function App() {
  const { i18n } = useLingui()

  return (
    <main>
      <LocaleSwitcher />
      <h1>
        <Trans>Dexa Scan Results</Trans>
      </h1>

      <p>
        <Trans>test</Trans>
      </p>
      <footer>
        <Trans>I'm a footer. 🦶</Trans>
      </footer>
    </main>
  )
}
