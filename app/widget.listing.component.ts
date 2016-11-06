import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
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
    @Input() currentOrderId: number;
    @Output() Change = new EventEmitter<any>();

    color: string;
    size: string;

    ngOnInit(): void {
         this.widgetDataService.getWidgetColor(this.widget.color_id)
            .subscribe((color) => {
                this.color = color.name;
            });

        this.widgetDataService.getWidgetSize(this.widget.size_id)
            .subscribe((size) => {
                this.size = size.name;
            });
    }

    isSmall(size): boolean {
        return size == 3;
    }

    isLittle(size): boolean {
        return size == 1;
    }

    isTiny(size): boolean {
        return size == 2;
    }

    addWidgetToOrder() {
        this.Change.emit(this.widget.widget_id);
    }
}