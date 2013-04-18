// Filename: clockInOut.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  var AbsenceTime = kendo.data.Model.define({
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
      TimeAmount: {
        type: 'int',
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

  return AbsenceTime;

});