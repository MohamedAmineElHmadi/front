import { Pipe, PipeTransform } from '@angular/core';
import { lienUtile } from 'src/app/Entities/lienUtile';

@Pipe({
  name: 'lienFilter'
})
export class LienFilterPipe implements PipeTransform {


  transform(list: lienUtile[], searchText: string): any {
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
