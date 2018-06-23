import {Component, OnInit} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {observable, action, computed} from 'mobx-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { environment } from '../environments/environment';

import {ModalWindowService} from './core/modal-window/modal-window/modal-window.service';
import {JwtService} from './core/auth/jwt/jwt.service';
import {ApiService} from './core/api/services/api/api.service';
import {Web3Service} from './integration/web3/web3.service';
import {AppService} from './services/app/app.service';
import {TeamsService} from './modules/teams/services/teams/teams.service';
import {RevenService} from './integration/raven/services/reven/reven.service';

import {emailValidator} from './shared/helpers/form-validators';
import {markAsTouchedAllFormInputs} from './shared/helpers/form-helpers';

import {PurchaseModel} from './models/purchase/purchase.models';
import {TransferModel} from './modules/transfers/models/transfer/transfer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;
  isHide: boolean = true;

  constructor(
    private modalWindowService: ModalWindowService,
    private fb: FormBuilder,
    private jwtService: JwtService,
    private apiService: ApiService,
    private web3Service: Web3Service,
    private appService: AppService,
    private teamsService: TeamsService,
    private revenService: RevenService
  ) {
  }

  ngOnInit() {
    this.revenService.init('https://86d695b1491d478693ff252ff9b2793b@sentry.applicature.com/8');
    this.apiService.setApiUrlDomain(environment.apiUrl);

    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator(/\S+@\S+\.\S+/)]],
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z][A-Za-z ]*$')]]
    });

    this.teamsService
      .initLoad()
      .subscribe();
  }

  showContent() {
    this.isHide = !this.isHide;
  }

  hideContent() {
    this.isHide = true;
  }

  @action moveMetaMask() {
    this.modalWindowService.moveMetaMask();
  }

  @action moveSignIn() {
    if (this.modalWindowService.signIn) {
      this.form.reset();
    }

    this.modalWindowService.moveSignIn();
  }

  @action moveBuy() {
    this.modalWindowService.moveBuy();
    this.hideContent();
  }

  @action buy(id: number) {
    if (this.isSubmitted) {
      return;
    }

    this.isSubmitted = true;

    this.appService
      .buy(id)
      .pipe(
        tap((purchase: PurchaseModel) => {
          this.appService
            .sendTransaction(purchase)
            .then(() => {
              this.appService.selectTeam(null);
              this.appService.setTransfersForCurrentTeam(null);
              this.modalWindowService.moveBuy();
              this.modalWindowService.moveAfrerBuy();
              this.isSubmitted = false;
              this.hideContent();

              setTimeout(() => {
                this.modalWindowService.moveAfrerBuy();
              }, 2000);
            })
            .catch((error) => {
              this.appService.selectTeam(null);
              this.appService.setTransfersForCurrentTeam(null);
              this.modalWindowService.moveBuy();
              this.isSubmitted = false;
            })
        }),
        catchError((error) => {
          this.appService.selectTeam(null);
          this.appService.setTransfersForCurrentTeam(null);
          this.modalWindowService.moveBuy();
          this.isSubmitted = false;

          return error;
        }),
      )
      .subscribe();
  }

  @action sign() {
    markAsTouchedAllFormInputs(this.form);

    if (this.form.invalid || this.isSubmitted) {
      return;
    }

    this.isSubmitted = true;

    this.appService
      .sign(this.form.value)
      .then((signature) => {
        this.appService
          .login({
            email: this.form.value.email,
            name: this.form.value.name,
            signature
          })
          .pipe(
            tap(() => {
              this.isSubmitted = false;
              this.form.reset();
            }),
            catchError((error) => {
              this.isSubmitted = false;

              return error;
            })
          )
          .subscribe();
      })
      .catch(() => {
        this.isSubmitted = false;
      });
  }

  @action moveModals() {
    this.moveSignIn();
    this.moveBuy();
  }

  @computed get metaMask() {
    return this.modalWindowService.metaMask;
  }

  @computed get signIn() {
    return this.modalWindowService.signIn;
  }

  @computed get afterBuy() {
    return this.modalWindowService.afterBuy;
  }

  @computed get isBuy() {
    return this.modalWindowService.buy;
  }

  @computed get wallet(): string {
    return this.web3Service.walltet;
  }

  @computed get selectedTeam() {
    return this.appService.selectedTeam;
  }

  @computed get transfersForCurrentTeam(): TransferModel[] {
    return this.appService.transfersForCurrentTeam;
  }

  @computed get afterSaveUserSuccess() {
    return this.modalWindowService.afterSaveUserSuccess;
  }

  @computed get afterSaveUserError() {
    return this.modalWindowService.afterSaveUserError;
  }

  @computed get preICOCountdown() {
    return this.appService.preICOCountdown;
  }

  @computed get checkTransferLength(): boolean {
    return this.transfersForCurrentTeam.length > 3;
  }

  @computed get firstThreetransfersForCurrentTeam(): TransferModel[] {
    return this.appService.firstThreetransfersForCurrentTeam;
  }
}
