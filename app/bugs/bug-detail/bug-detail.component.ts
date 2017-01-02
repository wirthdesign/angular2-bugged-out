import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ['bug-detail.component.css']
})

export class BugDetailComponent implements OnInit {
    private modalId = "bugModal";
    private bugForm: FormGroup;
    @Input() currentBug = new Bug(null, null, null, null, null, null, null, null, null);

    constructor(private formB: FormBuilder, private bugService: BugService) {

    }

    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        // this.bugForm = new FormGroup({
        //     title: new FormControl(null, Validators.required),
        //     status: new FormControl(1, Validators.required),
        //     severity: new FormControl(1, Validators.required),
        //     description: new FormControl(null, Validators.required)
        // });
        this.bugForm = this.formB.group({
            title: [null, Validators.required],
            status: [1, Validators.required],
            severity: [1, Validators.required],
            description: [null, Validators.required]
        });
    }

    submitForm() {
        console.log(this.bugForm);
        this.addBug();
    }

    addBug() {
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];
        this.bugService.addBug(this.currentBug);
    }
}