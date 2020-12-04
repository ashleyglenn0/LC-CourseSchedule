import { getLocaleDayNames } from '@angular/common';

export class Courses {
    public title: string;
    public code: string;
    public days: string[];
    public startTime: string;
    public endTime: string;
    public credits: number;

    constructor(title: string, code: string, days: string, startTime: string, endTime: string, credits: number){
        this.title = title;
        this.code = code;
        this.days = [];
        this.startTime = startTime;
        this.endTime = endTime;
        this.credits = credits;

    function getDays(days: string): string {
        return this.days.join("/");
    }

    }
}