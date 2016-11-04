import { Component, Input } from "@angular/core";
import { Widget } from "./widget";

@Component({
    selector: "widget-listing",
    templateUrl: "app/widget.listing.component.html",
    styleUrls: ["app/widget.listing.component.css"]
})

export class WidgetListingComponent {
    constructor() { }
    @Input() widget: Widget;

}