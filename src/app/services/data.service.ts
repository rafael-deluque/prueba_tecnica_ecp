import { Injectable } from '@angular/core';

import axios from "axios";
import { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";

//Models
import{GetOptions,ErrorResponse} from '../models/axios.model';
import{Equipment,Part,IndicatorValue,WorkOrder} from '../models/ecopetrol.model';



@Injectable()
export class DataService {

  private axiosClient: AxiosInstance;
	private errorHandler: ErrorHandler;
 
	constructor( errorHandler: ErrorHandler ) {
 
		this.errorHandler = errorHandler;
		this.axiosClient = axios.create({
			timeout: 5000,
			headers: {
        "apiKey": "bKEFSgbSBjbNpFJQGmBNpeTS1OxLwfcd",
        "Authorization": "czAwMDQ2MTU2NzM6VGVjaGVkZ2UyMDIwLg=="
      },
      baseURL: "https://e0811-iflmap.hcisbt.us2.hana.ondemand.com/http/equipment/"
		});
 
  }

    // ---
	// Public METHODS.
	// ---
  
  public async getAllEquipments():Promise<Equipment[]>{
    return await this.get<Equipment[]>({url: ""});
  }

  public async getFilterByCharacteristic(fieldName:string, characteristic:string):Promise<Equipment[]>{
    return await this.get<Equipment[]>({
      url: "",
      params: {
        $filter: "$filter=substringof('"+characteristic+"',"+fieldName+") eq true" // Example: "$filter=substringof('20',equipmentId) eq true"
      }
    });
  }
  public async getEquipmentPartsById(id:string):Promise<Part[]>{
    return await this.get<Part[]>({
      url: id+"/spareparts"
    });
  }
  public async getEquipmentWorkOrdersById(id:string):Promise<WorkOrder[]>{
    return await this.get<WorkOrder[]>({
      url: id+"/workorders"
    });
      
  }
  public async getEquipmentIndactorValuesById(id:string):Promise<IndicatorValue[]>{

    return await this.get<IndicatorValue[]>({
      url: id+"/indicatorvalues"
    });
  }

  

  // ---
	// Private METHODS.
	// ---
 
	private async get<T>( options: GetOptions ) : Promise<T> {
 
		try {
 
			var axiosResponse = await this.axiosClient.request<T>({
				method: "get",
				url: options.url,
				params: options.params
			});
 
			return( axiosResponse.data );
 
		} catch ( error ) {
 
			return( Promise.reject( this.normalizeError( error ) ) );
 
		}
 
  }

	private normalizeError( error: any ) : ErrorResponse {
 
		this.errorHandler.handleError( error );
 
		return({
			id: "-1",
			code: "UnknownError",
			message: "An unexpected error occurred."
		});
 
  }

}
