/**
 * Reset mocks and cleanup after each test
 */
import { vi, afterEach } from 'vitest'

afterEach(() => {
  vi.resetAllMocks()
})

// without the following import, react-dnd will give the error:
//    `ReferenceError: regeneratorRuntime is not defined`
// this is caused by regenerator-runtime not being applied correctly to Vitest.
// @see https://stackoverflow.com/questions/42535270
import 'regenerator-runtime/runtime'

// without the following import, jest-dom will give the error:
//    `TypeError: URL.createObjectURL is not a function`
// this is caused by the Web Worker API (specifically Dedicated Worker)
// not existing in Vitest.
// @see https://github.com/jsdom/jsdom/issues/1721#issuecomment-1079407658
import 'jsdom-worker'

// without the following import, Text from @react-three/drei will give the error:
//    `TypeError: Cannot set properties of null (setting 'fillStyle')`
// this is because jest-dom is not able add canvas, which we need for it to work.
// @see https://stackoverflow.com/a/69870147/22225741
// @see https://github.com/felippenardi/lottie-react-web/issues/21
import 'vitest-canvas-mock'

// without the following import, jest-dom will give the error:
//    `ReferenceError: setImmediate is not defined`
// this is because setImmediate has been removed from the jest-dom since v27
// but is required by socket.io-client.
// @see https://github.com/prisma/prisma/issues/8558#issuecomment-1129055580
global.setImmediate = vi.useRealTimers as unknown as typeof setImmediate
