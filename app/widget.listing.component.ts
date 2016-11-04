import { Component, Input } from "@angular/core";
import { Widget } from "./widget";
import { WidgetDataService } from "./widget.dataservice";

@Component({
    selector: "widget-listing",
    templateUrl: "app/widget.listing.component.html",
    styleUrls: ["app/widget.listing.component.css"]
})

export class WidgetListingComponent implements OnInit {
    constructor(private widgetDataService: WidgetDataService) { }

    @Input() widget: Widget;
    color: string;
   
    ngOnInit(): void {
         this.widgetDataService.getWidgetColor(this.widget.color_id)
            .subscribe((color) => {
                this.color = color.name;
            });
    }
}