import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ICours, NewCours } from '../cours.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ICours for edit and NewCoursFormGroupInput for create.
 */
type CoursFormGroupInput = ICours | PartialWithRequiredKeyOf<NewCours>;

type CoursFormDefaults = Pick<NewCours, 'id'>;

type CoursFormGroupContent = {
  id: FormControl<ICours['id'] | NewCours['id']>;
  titre: FormControl<ICours['titre']>;
  description: FormControl<ICours['description']>;
  image: FormControl<ICours['image']>;
  imageContentType: FormControl<ICours['imageContentType']>;
};

export type CoursFormGroup = FormGroup<CoursFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class CoursFormService {
  createCoursFormGroup(cours: CoursFormGroupInput = { id: null }): CoursFormGroup {
    const coursRawValue = {
      ...this.getFormDefaults(),
      ...cours,
    };
    return new FormGroup<CoursFormGroupContent>({
      id: new FormControl(
        { value: coursRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      titre: new FormControl(coursRawValue.titre, {
        validators: [Validators.required],
      }),
      description: new FormControl(coursRawValue.description, {
        validators: [Validators.required],
      }),
      image: new FormControl(coursRawValue.image, {
        validators: [Validators.required],
      }),
      imageContentType: new FormControl(coursRawValue.imageContentType),
    });
  }

  getCours(form: CoursFormGroup): ICours | NewCours {
    return form.getRawValue() as ICours | NewCours;
  }

  resetForm(form: CoursFormGroup, cours: CoursFormGroupInput): void {
    const coursRawValue = { ...this.getFormDefaults(), ...cours };
    form.reset(
      {
        ...coursRawValue,
        id: { value: coursRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): CoursFormDefaults {
    return {
      id: null,
    };
  }
}
