import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigating',
  templateUrl: './navigating.component.html',
  styleUrls: ['./navigating.component.scss']
})
export class NavigatingComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/home']);
  }

  onRelativeClick() {
    this.router.navigate(['home'], {relativeTo: this.activatedRoute});
  }

}
