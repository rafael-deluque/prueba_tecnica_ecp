import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private shareService: SharedService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.shareService.getSharedData()) {
            console.log('No estás logueado');
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}