// Range slider
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 500,
    max: 10000,
    values: [ 500, 10000 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] );
      $( "#amount-max" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
});
