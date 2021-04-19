$(document).ready(function() {
    $('i.fa-thumbs-up, i.fa-thumbs-down').click(function() {
        var $this = $(this),
            c = $this.data('count');
        if (!c) c = 0;
        c++;
        $this.data('count', c);
        $('#' + this.id + '-bs3').html(c);
    });

});