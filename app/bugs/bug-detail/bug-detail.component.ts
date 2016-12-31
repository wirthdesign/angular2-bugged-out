import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ['bug-detail.component.css']
})

export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;

    ngOnInit() {
        this.configureform();
    }

    configureform() {
        this.bugForm = new FormGroup({
            title: new FormControl(),
            status: new FormControl(),
            severity: new FormControl(),
            description: new FormControl()
        });
    }
}