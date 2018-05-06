import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '@state/index';
import { AddUser } from '@state/user/user.actions';
import { User } from '@state/user/user.model';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  onUserChange(user: User) {
    this.store.dispatch(new AddUser({ user: user }));
  }
}
