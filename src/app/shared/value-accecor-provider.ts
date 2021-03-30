import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Type, ExistingProvider } from '@angular/core';

export function valueAccessorProvider(component: Type<any>): ExistingProvider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true,
  };
}
