// Filename: clockInOut.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  var HalfFullDayAbsence = kendo.data.Model.define({
    id: 'Id',
    fields: {
      Id: {
        editable: false,
        nullable: true
      },
      Person: {
        type: 'int',
        validation: {
          required: true
        }
      },
      DateFrom: {
        type: 'date',
        validation: {
          required: true
        }
      },
      DateTo: {
        type: 'date',
        validation: {
          required: true
        }
      },
      FromDayType: {
        type: 'int',
        validation: {
          required: true
        }
      },
      ToDayType: {
        type: 'int',
        validation: {
          required: true
        }
      },
      TimeType: {
      	type: 'int',
        validation: {
          required: true
        }
      },
      Comment: {
        type: 'string'
      }
    }
  });

  return HalfFullDayAbsence;

});