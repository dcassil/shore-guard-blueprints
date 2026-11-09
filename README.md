# Shore Guard Blueprints

A blueprint is a generalized Shore Guard policy pack: a versioned description of architectural layers, allowed and forbidden dependencies, and enforceable rules. It contains reusable structure, not source material from a particular project.

## Submit a blueprint

Open the blueprint-submission issue form and provide a valid policy-pack JSON document plus the requested catalog context. Maintainers review the proposal for general usefulness, safety, schema validity, and supported rule kinds. Accepted submissions are implemented and tested in Shore Guard before a later release exports them here as shipped presets.

The files in `blueprints/` are generated from the shipped preset catalog. The schema in `schema/` describes their portable data format.

## Privacy

Submissions contain only generalized schema. Do not include code, repository names, web addresses, credentials, customer information, or project-specific evidence.

## Validate locally

Install the published policy package, then validate one or more files:

```sh
npm install @shore/guard-policy
node scripts/validate.mjs blueprints/*.json
```

See `CONTRIBUTING.md` for submission requirements.
