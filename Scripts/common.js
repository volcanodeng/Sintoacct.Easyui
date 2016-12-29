
function AddTabContent(title, content) {
    if ($("#tab_wrapper").tabs("exists", title)) {
        $("#tab_wrapper").tabs("select", title);
        return;
    }

    $("#tab_wrapper").tabs('add', {
        title: title,
        content: content,
        closable: true,
        selected: true
    });
}

function AddTabHref(title, href) {

    if ($("#tab_wrapper").tabs("exists", title)) {
        $("#tab_wrapper").tabs("select", title);
        return;
    }

    $("#tab_wrapper").tabs('add', {
        title: title,
        href: href,
        closable: true,
        selected: true
    });

}

function AddTabIframe(title, href) {

    if ($("#tab_wrapper").tabs("exists", title)) {
        $("#tab_wrapper").tabs("select", title);
        return;
    }

    $("#tab_wrapper").tabs('add', {
        title: title,
        content: '<iframe scrolling="yes" frameborder="0"  src="' + href + '" style="width:100%;height:100%;"></iframe>',
        closable: true,
        selected: true
    });

}

function removePanel() {
    var tab = $('#tab_wrapper').tabs('getSelected');
    if (tab) {
        var index = $('#tab_wrapper').tabs('getTabIndex', tab);
        $('#tab_wrapper').tabs('close', index);
    }
}




function formSuccessHandle(data)
{
    if (data == null) return false;
    var data = JSON.parse(data);

    if (data.message != null) {
        $.messager.alert("保存", data.message, "warning");
        return false;
    }
    else if (data.exceptionMessage != null)
    {
        $.messager.alert("保存", data.exceptionMessage, "warning");
        return false;
    }
    else {
        $.messager.show({ title: "保存", msg: "保存成功" });
        return true;
    }
}