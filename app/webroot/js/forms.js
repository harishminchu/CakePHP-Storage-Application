// 
// Provides form related JS functions
//

// calls functions after the page has loaded
Event.observe(document, 'dom:loaded', function() 
{
	formHelp();	
	focusFirstFormElement();
	enableJSElements();
});

/**
 * If there is a form on the page, this will loop through each input and stop at and focus on
 * the first empty input or submit button it finds
 */
function focusFirstFormElement()
{
	// loop through each input
	$$('input').each(function(item)
	{
		if(item.value.empty() || item.match('input[type="submit"]'))
		{
			item.focus();
			throw $break;
		}
	});
}

/**
 * Displays hidden elements which require JS. 
 */
function enableJSElements()
{
	$$('.JSRequired').each(function(item)
	{
		item.setStyle('display:block');
	});
}

/**
 * This will add observers and show the help (if it exists) for each text input and password input in a form
 */
function formHelp()
{
	// loop through each input type="text" and input type="password"
	$$(['input[type="text"]', 'input[type="password"]']).each(function(item)
	{
		if(!$(item.id + 'Help')) return;
		
		// hide the help on page load
		$(item.id + 'Help').setStyle('visibility:hidden;');	
		
		Event.observe(item, 'focus', function(event)
		{
			$(item.id + 'Help').setStyle('visibility:visible');	
		});
		Event.observe(item, 'blur', function(event)
		{
			$(item.id + 'Help').setStyle('visibility:hidden');	
		});
	});
}

function toggleCheckboxes(controller, checkboxClass)
{
	if(checkboxClass == null)
	{
		$$('input[type="checkbox"]').each(function(item)
		{
			item.checked = $(controller).checked;
		});
	}
	else
	{
		$$('.' + checkboxClass).each(function(item)
		{
			item.checked = $(controller).checked;
		});
	}
}

/**
 * Toggles a form item between disabled and enabled
 */
Element.Methods.toggleDisable = function(element) 
{
	if (element.hasAttribute('disabled')) 
	{
		element.removeAttribute('disabled');
	} 
	else 
	{
		element.setAttribute('disabled', 'disabled');
	}
}
Element.addMethods();