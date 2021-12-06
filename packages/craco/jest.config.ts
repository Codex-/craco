import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    roots: [
        "<rootDir>/lib"
    ],
    globals: {
        "ts-jest": {
          tsconfig: "tsconfig.test.json",
        },
      },
    testRegex: '\\.spec\\.[jt]s$'
}

export default config;
