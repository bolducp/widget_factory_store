import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
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

     getOrder(orderId: string): Observable<Array<Order>> {
        return Observable.create((observable) => {
            this.http
                .get(`https://challenge.emocha.com/order/${orderId}`)
                .map((r: Response) => r.json().data.item)
                .subscribe((data) => {
                        observable.next(data);
                        observable.complete();
                 }, (error) => {
                        console.error("Error caught while finding order: ", error);
                        observable.next([]);
                        observable.complete();
                    }
                );
        });
     }

     createNewOrder(name: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let bodyString = JSON.stringify({"name": name});
        console.log("NAME", name);
        console.log(bodyString)

        return Observable.create((observable) => {
            this.http
                .post("https://challenge.emocha.com/order", bodyString, options)
                .map((r: Response) => r.json().data)
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
