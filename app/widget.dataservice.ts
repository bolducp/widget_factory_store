import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Widget } from "./widget";

@Injectable()
export class WidgetDataService {
    constructor(private http: Http) {}

    getAllWidgets(): Observable<Array<Widget>> {
        return Observable.create((observable) => {
            this.http
                .get("https://challenge.emocha.com/widgets")
                .map((r: Response) => r.json().data.items)
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
}
