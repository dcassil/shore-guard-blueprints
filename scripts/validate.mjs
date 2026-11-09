import { readFile } from 'node:fs/promises';
import { validate } from '@shore/guard-policy';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('No blueprint files were provided.');
  process.exitCode = 1;
} else {
  for (const file of files) {
    try {
      const input = JSON.parse(await readFile(file, 'utf8'));
      const result = validate(input);
      if (result.hasUnknownEnforcingKinds) {
        const kinds = result.unknownRuleKinds.filter((rule) => rule.enforcing).map((rule) => rule.kind);
        throw new Error(`unknown enforcing rule kinds: ${kinds.join(', ')}`);
      }
      console.log(`valid: ${file}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`invalid: ${file}: ${message}`);
      process.exitCode = 1;
    }
  }
}
