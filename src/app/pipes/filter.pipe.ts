import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): [] {
    let category = args[0]
    let minPrice = Number(args[3])
    let maxPrice = Number(args[2])
    let subcategory = args[1]
    let filtredproduct = value
    if (category) {
      filtredproduct = filtredproduct.filter(product => {
        return product.category === category
      })
    }
    if (subcategory) {
      filtredproduct = filtredproduct.filter(product => {
        return product.subcategory === subcategory
      })
    }
    if (minPrice && maxPrice) {
      filtredproduct = filtredproduct.filter(product => {
        return product.price > minPrice && product.price < maxPrice
      }

      )
    }
    return filtredproduct

  }
}

