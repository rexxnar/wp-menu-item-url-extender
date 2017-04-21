jQuery( document ).ajaxComplete(function(event, xhr, settings) {
    var settingsData = settings.data.split('&');
    if( jQuery.inArray(settingsData, 'action=menu-get-metabox') || jQuery.inArray(settingsData, 'action=menu-quick-search')) {
        addLabels();
    }
});

function addLabels() {
    jQuery('.nav-menu-meta').find('.accordion-section').each(function() {
        jQuery(this).find('li').each(function() {
            var menuUrl = jQuery(this).find('.menu-item-url').val();
            if(typeof menuUrl != 'undefined'){
                menuUrl = menuUrl.replace(/^https?\:\/\//i, "");
                var urlParts = menuUrl.split('/');
                console.log(urlParts[0]);
                if(urlParts[0].match('/(.*\.local|localhost)/')){
                    urlParts.splice(0,1);
                }
                menuUrl = urlParts.join('/');
            }

            jQuery(this).find('.addedurl').remove();
            jQuery(this).find('label').append('<p class="addedurl" style="padding: 0px; margin: 0px"><small>' + menuUrl + '<small></p>');

        });
    });
}

addLabels();