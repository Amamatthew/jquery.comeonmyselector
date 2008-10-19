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

      // Set the label as active if the input already is.
      if (input.is(':checked')) {
        label.addClass(opts.activeClass);
      }
      
      // Hide the radio button from the user.
      input.hide();

      label.click(function() {

        if (input.attr('disabled')) return;

        if (opts.type == 'radio') {

          // Deselect all.
          inputs.removeAttr('selected');

          // Remove all active class designations.
          labels.removeClass(opts.activeClass);

        }

        if (label.hasClass(opts.activeClass)) {

          if (opts.type == 'checkbox') {

            input.removeAttr('selected');

            label.removeClass(opts.activeClass);

          }

        } else {

          // Select the current one.
          input.attr('selected', 'selected');

          // Set the class of the label to active.
          label.addClass(opts.activeClass);

        }

      });
      
    });

  });

};

//////////////////////////////////////// 
$.fn.comeOnMySelector.defaults = {
  activeClass: 'active',
  type:        'radio'
};
//////////////////////////////////////// 

})(jQuery);

