/**
 * unix-timestamp-date-time-format.class
 */
import {OwlDateTimeFormats} from '../date-time-format.class';

export const OWL_UNIX_TIMESTAMP_DATE_TIME_FORMATS: OwlDateTimeFormats = {
    parseInput: null,
    fullPickerInput: {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'},
    datePickerInput: {day: 'numeric', month: 'numeric', year: 'numeric'},
    timePickerInput: {hour: 'numeric', minute: 'numeric'},
    yearPickerInput: {month: 'numeric', year: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
};
