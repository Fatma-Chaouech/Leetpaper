function initialize_defaults() {
    browser.storage.local.get("defaults_initialized", function(obj) {
        if (obj.defaults_initialized)
            return;

        browser.storage.local.set({"twitter_enabled":true,
                                    "reddit_enabled":true,
                                    "usv_enabled":true,
                                    "hn_enabled":true,
                                    "shortcut_enabled":true,
                                    "defaults_initialized":true});
    })
}

initialize_defaults();

var api_link = "http://localhost:3000";

// send message to content script 
function bookmarklet() {

    browser.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log("entered bookmarklet");
        browser.tabs.sendMessage(tabs[0].id, {'message': 'bookmarklet'});
    });
}

browser.browserAction.onClicked.addListener(function(tab) {
    //Called when the user clicks on the browser action.
    bookmarklet();
});

// send message to content script to save link
function onContextClick(info, tab) {
    if (info.linkUrl) {
        console.log("entered save link");
        var url = info.linkUrl.split('?')[0]
        // console.log('got the link url: ' + info.linkUrl);
        browser.tabs.sendMessage(tab.id, {'message': 'saveLink', 'url': url});
    }
    else {
        bookmarklet()
    }
}

//create a contextMenu
browser.contextMenus.create({
    "title": "Send to Leetpaper",
    "contexts": ["page", "selection", "link"],
    "onclick" : onContextClick
});

// bookmarklet_upload message : post request
// bookmarklet_xpaths message : get request
browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == 'bookmarklet_upload') {
            try {
                console.log("entered bookmarklet_upload");
                var x = new XMLHttpRequest();
                x.open('POST', api_link + '/bookmarklet/post_v5', true);
                x.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                x.onreadystatechange = function(){
                    try {
                        // if not done yet
                        if (x.readyState != 4) return;
                        if ([200,201,202].indexOf(x.status) == -1){
                            browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_status', 'status': 'failure', 'code': x.status});
                        }
                        else {
                            console.log("sent bookmarklet_status");
                            browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_status', 'status': 'success', 'response': x.responseText});
                        }
                    } catch (e) {
                        
                        browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_status', 'status': 'exception'});
                    }
                }
                //console.log('request postbody '+ request.postbody +' is sent to '+ api_link +'/bookmarklet/post_v5');
                x.send(request.postbody);
            } catch (e) {
                browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_status', 'status': 'exception'})
            }
        }
        else if (request.message == 'bookmarklet_xpaths') {
            console.log("entered bookmarklet_xpaths");
            var url = request.url.split('?')[0]
            var x = new XMLHttpRequest();
            x.open('GET', api_link + '/bookmarklet/xpaths?url=' + encodeURIComponent(url));
            x.onreadystatechange = function() {
                //console.log(x.readyState + ' ' + x.status);
                if (x.readyState != 4) return;
                if (x.status != 200)
                    browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_xpath_status', 'status': 'failure', 'code': x.status});
                else {
                    try {
                        response_dict = JSON.parse(x.responseText);
                        console.log("entered bookmarklet_xpath_status");
                        browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_xpath_status', 'status': 'success', 'xpaths': response_dict['xpaths']});
                    }
                    catch(e) {
                        
                        browser.tabs.sendMessage(sender.tab.id, {'message': 'bookmarklet_xpath_status', 'status': 'exception'});
                    }
                }
            }
            x.send()
        }
        else if (request.message == 'bookmark_move') {
            console.log('entered bookmark_move');
            var x = new XMLHttpRequest();
            x.open('POST', api_link + '/move/' + request.bookmark_id + '/to/' + request.folder_id);
            x.send();
        }
    }
)


