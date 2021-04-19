$('#datepicker').datepicker({
    daysOfWeekDisabled: [0, 6],
    endDate: '+0d',
    autoclose: true,
    format: "dd/mm/yyyy"
});

$('#timepicker').timepicker({
    defaultTime: 'current',
    disableFocus: true,
    autoclose: true,
    template: 'dropdown',
});