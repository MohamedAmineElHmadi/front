import { Pipe, PipeTransform } from '@angular/core';
import { Cours } from '../../Entities/cours';

@Pipe({
  name: 'courseFilterPipe'
})
export class CourseFilterPipePipe implements PipeTransform {

  transform(list: Cours[], searchText: string): any {
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
