import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro'
 /*  pure: false */
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

   /*   transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

}
