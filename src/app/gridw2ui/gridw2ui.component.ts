import { Component, OnInit } from '@angular/core';
 import { w2grid } from '../../../node_modules/w2ui/w2ui-2.0.js';



@Component({
  selector: 'app-gridw2ui',
  templateUrl: './gridw2ui.component.html',
  styleUrls: ['./gridw2ui.component.css'],
 
})

export class Gridw2uiComponent implements OnInit {
  ngOnInit(): void {
    console.log('ok');

  let  id_groupeEnCours=1;
  let id_ao=1

    let grid = new w2grid({
      name: 'grid',
      box: '#grid',
      show: {
        header: true,
        footer: true,
        toolbarAdd: true,
        toolbarDelete: false,
        toolbarSave: false,
        toolbar: true,
        lineNumbers: true
    },
      columns: [
          { field: 'fname', text: 'Full Name', size: '200px',
              render: function (record, extra) {
                  var html = '<div>'+ record.fname + ' ' + record.lname + '</div>';
                  return html;
              }
          },
          { field: 'email', text: 'Email', size: '100%' },
          { field: 'profit', text: 'Profit', size: '120px', render: 'money' }, // see w2utils.formatters for more formatters
          { field: 'sdate', text: 'Start Date', size: '120px', render: 'date', style: 'text-align: center' }
      ],
      records: [
          { recid: 1, fname: 'John', lname: 'Doe', email: 'john@gmail.com', profit: 2500, sdate: '1/3/2012' },
          { recid: 2, fname: "Ludwig Van", lname: "Beethoven",email: 'john@gmail.com', profit: 2500, sdate: "1770-1827", w2ui: { style: "background-color: #C2F5B4" } },
          { recid: 3, fname: 'Jin', lname: 'Franson', email: 'jin@gmail.com', profit: 473, sdate: '3/3/2012' },
          { recid: 4, fname: 'Susan', lname: 'Ottie', email: 'susan@gmail.com', profit: 304, sdate: '5/3/2012' },
          { recid: 5, fname: 'Kelly', lname: 'Silver', email: 'kelly@gmail.com', profit: 9300, sdate: '8/19/2012' },
          { recid: 6, fname: 'Francis', lname: 'Gatos', email: 'francis@gmail.com', sdate: '6/12/2012' },
          { recid: 7, fname: 'Mark', lname: 'Welldo', email: 'mark@gmail.com', profit: 3400, sdate: '8/13/2012' },
          { recid: 8, fname: 'Thomas', lname: 'Bahh', email: 'thomas@gmail.com', profit: 2030, sdate: '4/31/2012' },
          { recid: 10, fname: 'John', lname: 'Doe', email: 'john@gmail.com', profit: 13004, sdate: '1/3/2012' },
          { recid: 12, fname: 'Stuart', lname: 'Motzart', email: 'stuart@gmail.com', sdate: '4/13/2012' },
          { recid: 13, fname: 'Jin', lname: 'Franson', email: 'jin@gmail.com', profit: 4043, sdate: '3/3/2012' },
          { recid: 14, fname: 'Susan', lname: 'Ottie', email: 'susan@gmail.com', profit: 474, sdate: '5/3/2012' },
          { recid: 15, fname: 'Kelly', lname: 'Silver', email: 'kelly@gmail.com', profit: 1704, sdate: '8/19/2012' },
          { recid: 16, fname: 'Francis', lname: 'Gatos', email: 'francis@gmail.com', sdate: '6/12/2012' },
          { recid: 17, fname: 'Mark', lname: 'Welldo', email: 'mark@gmail.com', profit: 7065, sdate: '8/13/2012' },
          { recid: 18, fname: 'Thomas', lname: 'Bahh', email: 'thomas@gmail.com', profit: 609, sdate: '4/31/2012' },
          { recid: 19, fname: 'Sergei', lname: 'Rachmaninov', email: 'sergei@gmail.com', profit: 777, sdate: '2/23/2012' }
      ],
      postData: {
           id_groupe: id_groupeEnCours,
       id_ao: id_ao
       }, 
  })
  }
}

