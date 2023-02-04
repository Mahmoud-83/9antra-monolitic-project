/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientserviceService } from 'app/clientservice.service';
import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { Cours } from 'app/cours';
import { EntityNavbarItems } from 'app/entities/entity-navbar-items';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'jhi-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.scss']
})
export class HomeclientComponent implements OnInit {

  allCours  : Cours [] = [];
  isAuth : void | undefined;
  inProduction?: boolean;
  isNavbarCollapsed = true;
  openAPIEnabled?: boolean;
  version = '';
  account: Account | null = null;
  entitiesNavbarItems: any[] = [];

  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private profileService: ProfileService,
    private router: Router,
    private clientservice : ClientserviceService,

  ) {

  }

  ngOnInit(): void {

    this.get();
    this.entitiesNavbarItems = EntityNavbarItems;
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });

    this.accountService.getAuthenticationState().subscribe(account => {
      this.account = account;
    });
  }

  get(){
    this.clientservice.get().subscribe((data) => {
      this.allCours = data;
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type


  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  login(): void {
    this.router.navigate(['/login']);
  }


  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  getAuth()
  {
    return this.isAuth = this.login();
  }
}
