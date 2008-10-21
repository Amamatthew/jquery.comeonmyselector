(function($) {

$.fn.comeOnMySelector = function(options) {

  var opts = $.extend({}, $.fn.comeOnMySelector.defaults, options);

  var inputQuery = "input[type='"+opts.type+"']";

  return this.each(function() {
    var fieldset = $(this);
    var inputs   = fieldset.find(inputQuery);
    var labels   = fieldset.find('label');

    labels.each(function() {
      var label = $(this);
      var input = $(this).next(inputQuery);

      // Hijack the click event of the radio buttons (just in case)
      label.click(function() { input.triggerHandler('click'); });

      // Set the label as selected if the input already is.
      if (input.is(':checked')) {
        label.addClass(opts.selectedClass);
      }

      // Set the label as disabled if the input already is.
      if (input.is(':disabled')) {
        label.addClass(opts.disabledClass);
      }
      
      // Hide the radio button from the user.
      input.hide();

      label.click(function() {

        if (input.attr('disabled')) return;

        if (opts.type == 'radio') {

          // Deselect all.
          inputs.removeAttr('selected');

          // Remove all selected class designations.
          labels.removeClass(opts.selectedClass);

        }

        if (label.hasClass(opts.selectedClass)) {

          if (opts.type == 'checkbox') {

            input.removeAttr('selected');

            label.removeClass(opts.selectedClass);

          }

        } else {

          // Select the current one.
          input.attr('selected', 'selected');

          // Set the class of the label to selected.
          label.addClass(opts.selectedClass);

        }

      });
      
    });

  });

};

//////////////////////////////////////// 
$.fn.comeOnMySelector.defaults = {
  selectedClass: 'selected',
  disabledClass: 'disabled',
  type:          'radio'
};
//////////////////////////////////////// 

})(jQuery);

