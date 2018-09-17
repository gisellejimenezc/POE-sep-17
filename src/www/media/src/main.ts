import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
