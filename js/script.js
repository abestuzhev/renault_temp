JSCSiteTabs =
{
	SetActiveTab: function(Tab, bSkipHashSet)
	{
		var tab = $(Tab),
			tabs = tab.parent().find("li");
			content = $("#" + tab.attr("id") + "-body");

		tabs.removeClass("active");
		if(content.length > 0)
		{
			$(content).parent().find(".tab-pane").hide();
			tab.addClass("active");
			if(!bSkipHashSet)
				document.location.hash = tab.attr("id") + "-link";
			content.show();
			var input = JSCSiteTabs.GetInput();
			if(input.length > 0)
				input.val(tab.attr("id").substr(4));
		}
	},

	SetTabCookie: function(TabSectionId, TabId)
	{
		document.cookie = "SamikoTabs[" + TabSectionId + "]=" + TabId + "; path=/;";
	},

	TabToTab: function(TabId, bSkipHashSet)
	{
		var Tab = $('#' + TabId);
		if(Tab.length > 0)
		{
			JSCSiteTabs.SetActiveTab(Tab, bSkipHashSet || false);
		}
	},

	GetInput: function()
	{
		return $("form").has(".nav-tabs").find("input[name=\"active_tab\"]");
	},

	Init: function()
	{
		$(function() {

			var TabId = null;
			if(document.location.hash.indexOf("#tab-") != -1)
			{
				TabId = "tab-" + document.location.hash.substr(5, document.location.hash.length-10);
			}
			else
			{
				var input = JSCSiteTabs.GetInput();
				if(input.length > 0 && input.val().length > 0)
				{
					TabId = "tab-" + input.val();
				}
			}

			if(null == TabId)
			{
				var div = $(".nav-tabs li:first");
				if(div.length > 0)
					TabId = div.attr("id");
			}

			if(null != TabId)
			{
				JSCSiteTabs.TabToTab(TabId, true);
			}

			$(".nav-tabs li").unbind().live("click", function() {
				JSCSiteTabs.SetActiveTab(this, window.disableTabHash || false);
			});
		});
	}
};
JSCSiteTabs.Init();


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("aside");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
