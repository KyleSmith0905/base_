# BASE_ (pronounced "Base Score")

_IN DEVELOPMENT, IGNORE FOR NOW_

A central base for your development environment. Manage and 

## Installation

1. Install with `pnpm i @base_/cli`.
2. Make a `base-score/` or `base_/` directory.
3. Create a `config.ts` inside, and configure it to your environment.
4. Run `base_ base-score/config.ts`.

## Example

`base-score/config.ts`
```ts
import { defineBaseScoreConfig, colors } from '@base_/cli';
import { rmdirSync } from 'node:fs';
import { join } from 'node:path';

export default defineBaseScoreConfig({
  port: 3000, // Defaults to 3000
  packages: {
    mobile: {
      name: "Mobile",
      color: colors.red,
      link: [{ port: 4000, name: "Local Web Server" }],
      scripts: [
        {
          label: "Start Server",
          command: "start:mobile",
          type: ScriptType.Serve,
          icon: "lucide:cloud",
        },
        {
          label: "Deploy App",
          command: async () => {
            // Deploys the app
          },
          type: ScriptType.Action,
          icon: "lucide:upload",
        },
      ],
    }
  }
})
```
