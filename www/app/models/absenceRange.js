// Filename: clockInOut.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  var AbsenceRange = kendo.data.Model.define({
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
      Date: {
        type: 'date',
        validation: {
          required: true
        }
      },
      TimeFrom: {
        type: 'time',
        validation: {
          required: true
        }
      },
      TimeTo: {
        type: 'time',
        validation: {
          required: true
        }
      },
      TimeType: {
        type: 'int'
      },
      Comment: {
        type: 'string'
      }
    }
  });

  return AbsenceRange;

});