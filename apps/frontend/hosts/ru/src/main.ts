import { setRemoteDefinitions } from '@nrwl/angular/mf';

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  // eslint-disable-next-line no-console
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
