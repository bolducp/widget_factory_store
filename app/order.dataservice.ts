import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Order } from "./order";

@Injectable()
export class OrderDataService {
    constructor(private http: Http) {}

     getOrder(id: number): Observable<Array<Widget>> {
        return Observable.create((observable) => {
            this.http
                .get(`https://challenge.emocha.com/order/${id}`)
                .map((r: Response) => r.json().data.item)
                .subscribe((data) => {
                        observable.next(data);
                        observable.complete();
                 }, (error) => {
                        console.error("Error caught while getting widgets: ", error);
                        observable.next([]);
                        observable.complete();
                    }
                );
        });
     }

     getAllOrders(): Observable<Array<Order>> {
        return Observable.create((observable) => {
            this.http
                .get("https://challenge.emocha.com/orders")
                .map((r: Response) => r.json().data.items)
                .subscribe((data) => {
                        observable.next(data);
                        observable.complete();
                 }, (error) => {
                        console.error("Error caught while getting all orders: ", error);
                        observable.next([]);
                        observable.complete();
                    }
                );
        });
     }


}
