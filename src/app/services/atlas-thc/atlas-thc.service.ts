import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtlasThcService {
  private baseUrl = 'https://atlas.thc.state.tx.us/Data/DataDownload';

  constructor(private http: HttpClient) {}

  downloadMarkerData() {
    // Note: This is a simplified version. In reality, you'd need to handle this server-side
    // due to CORS restrictions and the need to interact with a web form.
    const formData = new FormData();
    formData.append('sel_datadl_county', 'ALL');
    formData.append('ck_datadl_markers', 'on');
    formData.append('raiodFileTypeCSV', 'on');

    return this.http.post(this.baseUrl, formData, { responseType: 'blob' });
  }
}