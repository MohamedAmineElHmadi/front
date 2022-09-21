import { Pipe, PipeTransform } from '@angular/core';
import { Ue } from 'src/app/Entities/Ue';

@Pipe({
  name: 'ueFilter'
})
export class UeFilterPipe implements PipeTransform {


  transform(list: Ue[], searchText: string): any {
    if (!list)
      return [];
    if (!searchText)
      return list;
    searchText = searchText.toLocaleLowerCase();

    list = list.filter(c => {
      return c.libelle.toLocaleLowerCase().includes(searchText);
    });
    return list;

  }

}
