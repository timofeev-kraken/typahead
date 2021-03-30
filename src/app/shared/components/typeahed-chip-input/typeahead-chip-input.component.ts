import {ControlValueAccessor} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {valueAccessorProvider} from '../../value-accecor-provider';
import {map} from 'rxjs/operators';
import {Observable, ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-typeahead-chip-input',
  templateUrl: './typeahead-chip-input.component.html',
  styleUrls: ['./typeahead-chip-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [valueAccessorProvider(TypeaheadChipInputComponent)],
})
export class TypeaheadChipInputComponent implements ControlValueAccessor {
  @Input() public data: any[] = [];
  @Input() public valueProp = 'id';
  @Input() public labelProp = 'name';
  @Input() public placeholder = '';
  @ViewChild('searchedValue') public input: ElementRef;

  public isOpen = false;
  public itemsNotFound = 'Type something else';
  public model: number[];
  public onChange: (value: number[]) => void;
  public onTouched: () => void;
  public foundList$: Observable<any[]>;
  private searchString: string;

  private foundListSubject: ReplaySubject<any[]> = new ReplaySubject();

  constructor() {
    this.foundList$ = this.foundListSubject
      .pipe(map((data: any) => (this.searchString ? data.filter(this.filter) : data)));
  }

  public toggle(value?: boolean, wrapperElem?: HTMLElement): void {
    this.isOpen = typeof value === 'undefined' ? !this.isOpen : value;

    if (!this.isOpen) {
      this.touch();
    }
    if (this.isOpen) {
      this.foundListSubject.next(this.data);
    }
  }

  public searchValue(searchString: string): void {
    this.searchString = searchString.toLowerCase && searchString.toLowerCase();
    this.foundListSubject.next(this.data);
  }

  public select($event: number): void {
    this.searchString = '';
    this.input.nativeElement.value = '';
    this.model = this.model || [];

    const model = [...this.model];
    const index = model.findIndex((id: number) => id === $event);

    if (index !== -1) {
      model.splice(index, 1);
      this.model = model;
    } else {
      this.model.push($event);
    }

    this.onChange(this.model);
  }

  private filter = (item: any): boolean => {
    if (!item[this.labelProp] || !item[this.labelProp].toLowerCase || !this.searchString) {
      return false;
    }

    return item[this.labelProp].toLowerCase().includes(this.searchString);
  }

  public findItem(id: number): {} {
    return this.data.find((item: {}) => item[this.valueProp] === id) || {};
  }

  public writeValue(value: number[]): void {
    this.model = value;
  }

  public isSelected(id: number): boolean {
    return this.model && this.model.includes(id);
  }

  public touch(): void {
    this.onTouched();
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: (value: number[]) => void): void {
    this.onChange = fn;
  }
}
