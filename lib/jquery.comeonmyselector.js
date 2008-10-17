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
      
      // Hide the radio button from the user.
      input.hide();

      label.click(function() {

        if (opts.type == 'radio') {

          // Deselect all.
          inputs.removeAttr('checked');

          // Remove all active class designations.
          labels.removeClass(opts.activeClass);

        }

        if (label.hasClass(opts.activeClass)) {

          if (opts.type == 'checkbox') {

            input.removeAttr('checked');

            label.removeClass('active');

          }

        } else {

          // Select the current one.
          input.attr('checked', 'checked');

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

