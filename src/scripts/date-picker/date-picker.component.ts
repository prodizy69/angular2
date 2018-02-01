import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, Input, SimpleChanges, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
declare let Flatpickr: any;

export class DatePickerConfig {
  defaultDate: string | Date = null;
  enableTime: boolean = true;
  hourincrement: number = 1;
  maxDate: string | Date = null;
  minDate: string | Date = null;
  minuteincrement: number;
  noCalendar: boolean = false;
  onChange: any[] = null;
  placeholder: string = null;
  appendTo: HTMLElement = null;
}
@Component({
  selector: 'date-picker',
  templateUrl: 'scripts/date-picker/date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ],
  styleUrls: ['scripts/date-picker/date-picker.component.css']
})
export class DatePickerComponent implements AfterViewInit, ControlValueAccessor, OnDestroy, OnChanges, OnInit {

  private dateChangeListener: any;

  datePickerElement: HTMLElement;
  datePicker: any;
  value;
  placeholder = 'Please selecte date';
  clickedOutSide: boolean = false;

  @Input()
  config: DatePickerConfig;

  onTouchFn: any = (_: any) => { };
  onChangeFn: any = (_: any) => { };

  constructor(
    private element: ElementRef
  ) {
    this.dateChangeListener = this.onDateChange.bind(this);
  }

  ngOnInit() {
    this.registerListenerOnWindow();
  }

  writeValue(val: string) {
    this.value = val;
    this.setValue(this.value);
  }

  setValue(val) {
    if (this.datePicker) {
      this.datePicker.setDate(val, true);
    }
  }

  registerOnChange(fn: any) {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchFn = fn;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.datePicker) {
      this.datePicker.destroy();
      this.createDatePicker();
    }
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.windowEventCallback.bind(this));
    if (this.datePicker) {
      this.datePicker.destroy();
    }
  }

  ngAfterViewInit() {
    this.createDatePicker();
  }

  registerListenerOnWindow() {
    window.addEventListener('click', this.windowEventCallback.bind(this));
  }

  windowEventCallback(e: MouseEvent) {
    this.clickedOutSide = true;
    this.isClickedInsideParent(e.target as HTMLElement);
    if (this.clickedOutSide) {
      this.datePickerElement = <HTMLElement>(<HTMLElement>this.element.nativeElement).querySelector('input[type="text"]');
      this.datePickerElement.blur();
    }
  }

  isClickedInsideParent(el: HTMLElement) {
    if (el) {
      if (Array.isArray(el.className) && el.className.indexOf('flatpickr-calendar') !== -1) {
        this.clickedOutSide = false;
      }
      this.isClickedInsideParent(el.parentElement);
    }
  }

  createDatePicker() {
    this.datePickerElement = <HTMLElement>(<HTMLElement>this.element.nativeElement).querySelector('input[type="text"]');
    this.datePicker = new Flatpickr(this.datePickerElement, this.getDatePickerConfig());
    this.setValue(this.value);
  }

  getDatePickerConfig(): DatePickerConfig {
    let config = this.config || new DatePickerConfig();
    if (Array.isArray(config.onChange)) {
      if (config.onChange.indexOf(this.dateChangeListener) === -1) {
        config.onChange.push(this.dateChangeListener);
      }
      config.onChange = config.onChange.filter(v => v);
    } else if (config.onChange) {
      config.onChange = [config.onChange, this.dateChangeListener];
    } else {
      config.onChange = [this.dateChangeListener];
    }
    config.appendTo = <HTMLElement>this.datePickerElement.parentNode;
    return config;
  }

  onDateChange(selectedDates, dateStr) {
    setTimeout(() => {
      let date: Date = selectedDates[0];
      if (typeof date === 'object' && date && date.toISOString) {
        this.onChangeFn(date.toISOString());
      } else {
        this.onChangeFn(null);
      }
    });
  }
}
