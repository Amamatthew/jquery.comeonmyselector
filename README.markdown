jquery.comeOnMySelector
=======================

jquery.comeOnMySelector is a laissez-faire checkbox and radio button toggle 
plugin for jQuery.  It allows you to take a properly-formatted form fieldset 
filled with radio buttons or checkboxes:

     <fieldset class="radio_set">
       <label for="english">English</label>
       <input type="radio" name="radio" value="english"/>

       <label for="spanish">Spanish</label>
       <input type="radio" name="radio" value="spanish"/>

       <label for="german">German</label>
       <input type="radio" name="radio" value="german"/>
       
       <label for="italian">Italian</label>
       <input type="radio" name="radio" value="italian"/>
     </fieldset>

and turn them into click-togglable lists which return results exactly like their 
radio button and checkbox brethren with the flip of a plugin:

    $('.radio_set').comeOnMySelector({type: 'radio'});

Options
=======

There are two options for customizing your comeOnMySelector configuration:

    $('.checkbox_set').comeOnMySelector({
      type:         'checkbox',                   // Designates the type of selector; one of 'checkbox' or 'radio'.
      activeClass:  'my_active_class'             // Dictate what class is assigned to the 'active' items.     
    });

Radio buttons and checkboxes are so 1999.


