import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../model/news.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :News[],filterString : string,propName:string): any[] {
    const re :News[] =[]


    if(!value || filterString === '' || propName === ''){
      return value
    }
    
    value.forEach((a:any)=>{
      if(a[propName]?.trim().toLowerCase().includes(filterString.toLowerCase())){
       
       
        re.push(a)
      }
    })
    return re
  }

}
