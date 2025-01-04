import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private dpiDetails: any;

  setDpiDetails(data: any): void {
    this.dpiDetails = data;
    // localStorage.setItem("info", JSON.stringify(data));
    localStorage.setItem("info", data);
  }

  getDpiDetails(): any {
    if (!this.dpiDetails) {
      const storedData = localStorage.getItem("info");
      if (storedData) {
        // this.dpiDetails = JSON.parse(storedData);
        this.dpiDetails = storedData;

      }
    }
    return this.dpiDetails;
  }

  clearDpiDetails(): void {
    this.dpiDetails = null;
  }
}
