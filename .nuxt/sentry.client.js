import VueLib from 'vue'
import * as Sentry from '@sentry/browser'

import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {"dsn":"https:\u002F\u002F6b550a70d77a455bbcb3a3d5e3adb86f@o500249.ingest.sentry.io\u002F5579810","environment":"development","release":"4b1de25b1d92397dca346d579cdf257060177c4c"}
  config.integrations = [
    new Dedupe({}),
    new ExtraErrorData({}),
    new ReportingObserver({}),
    new RewriteFrames({}),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":true}})
  ]

  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
