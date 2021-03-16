import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable()
export class ProductCategoryNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): Product {
    if (source.categories && source.categories.length) {
      target.firstCategoryName = source.categories[0].name.replace(' ', '-');
    }
    return target;
  }
}

@Injectable()
export class ProductPrettyNameNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target?: any): Product {
    // console.log('name' + source.code);
    // target.prettyName = source.name.replace(/\s/g, '-');
    return target;
  }
}
