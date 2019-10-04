import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MultiplyService } from '../multiply.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.scss']
})
export class MultiplyComponent implements OnInit {

  question;
  multiplyForm: FormGroup;

  constructor(public multiplyS: MultiplyService, public fb: FormBuilder, public router: Router, public route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      this.multiplyS.multiplicationId = +params.get('multiplicationId');
      console.log("multiplications", this.multiplyS.multiplications);
      console.log("results", this.multiplyS.results);
      if(this.multiplyS.multiplicationId > this.multiplyS.multiplications.length - 1) {
        this.router.navigate(['/results']);
      }

      this.question = this.multiplyS.multiplications[this.multiplyS.multiplicationId];
      this.multiplyForm = this.fb.group({
        multiplication: new FormControl('', [
          Validators.required
        ])
      });
    });
  }

  ngOnInit() {
  }

  get multiplication() { return this.multiplyForm.get('multiplication'); }

}
