import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

export function modules() {
  return [
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatChipsModule, MatFormFieldModule, MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatNativeDateModule, MatOptionModule, MatProgressSpinnerModule, MatRadioModule,
    MatRippleModule, MatSelectModule, MatSlideToggleModule, MatTableModule, MatTabsModule,
    MatMenuModule, MatProgressBarModule, MatSidenavModule, MatSnackBarModule, MatToolbarModule,
    MatTooltipModule,ReactiveFormsModule,FormsModule
  ];
}

@NgModule({
  imports: modules(),
  exports: modules()
})
export class MaterialModule {
  public static forRoot() {
    return {
      ngModule: MaterialModule
    };
  }
}
