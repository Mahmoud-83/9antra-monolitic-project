import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICours } from '../cours.model';
import { DataUtils } from 'app/core/util/data-util.service';

@Component({
  selector: 'jhi-cours-detail',
  templateUrl: './cours-detail.component.html',
})
export class CoursDetailComponent implements OnInit {
  cours: ICours | null = null;

  constructor(protected dataUtils: DataUtils, protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ cours }) => {
      this.cours = cours;
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  previousState(): void {
    window.history.back();
  }
}
