import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const subcategory = value.filter(item=>{
      return item.name == args[0]
    })
    return ;
  }

}
