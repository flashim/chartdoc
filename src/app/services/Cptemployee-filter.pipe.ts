import { PipeTransform, Pipe } from '@angular/core';
import { PatientCPTModel } from '../models/PatientCPT.model';



@Pipe({
    name: 'PatientCPTSearchFilter',
    pure : true
})
export class CPTEmployeeFilterPipe implements PipeTransform {
    transform(items: any, filter: any, defaultFilter?: boolean): any {
        if (!filter) {
          return items;
        }
        if (!Array.isArray(items)) {
          return items;
        }
        if (filter && Array.isArray(items)) {
          const filterKeys = Object.keys(filter);
          if (defaultFilter) {
            return items.filter(item =>
                filterKeys.reduce((x, keyName) =>
                    (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == '', true));
          } else {
            return items.filter(item => {
              return filterKeys.some((keyName) => {
                return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == '';
              });
            });
          }
        }
      }
}
