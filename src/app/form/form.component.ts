import { Component, OnInit } from '@angular/core';
import { w2form, query } from 'w2ui/w2ui-2.0.js';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent  implements OnInit {
  ngOnInit(): void {
    console.log('form');

    // this function triggers on document.ready
    let form = new w2form({
        box: '#form',
        name: 'form',
        record: {
            first_name: 'John',
            last_name: 'Doe'
        },
        // formURL: 'data/form.html',    // you can load form from extenral file
        formHTML: query('#form').html(), // or you can use form that is already in HTML
        fields: [
            { field: 'first_name', type: 'text', required: true },
            { field: 'last_name',  type: 'text', required: true },
            { field: 'comments',   type: 'text'}
        ],
        actions: {
            reset() {
                this.clear()
            },
            save() {
                this.save()
            }
        }
    })





  }
}