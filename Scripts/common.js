
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

    //隐藏tab滚动条避免多重滚动条
    $(".tabs-panels .panel-body").css({"overflow":"hidden"});
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
    if (typeof data != "object") data = JSON.parse(data);

    if (data.message != null) {
        $.messager.alert("操作结果", data.message, "warning");
        return false;
    }
    else if (data.exceptionMessage != null)
    {
        $.messager.alert("操作结果", data.exceptionMessage, "warning");
        return false;
    }
    else {
        $.messager.show({ title: "操作结果", msg: "保存成功" });
        return true;
    }
}



/**
 * Easyui Datagrid Row Editing
 */

var easyuiVar = {
    editIndex: undefined,
    dg: undefined
}


function endEditing() {
    if (easyuiVar.editIndex == undefined) { return true }
    if (easyuiVar.dg.datagrid('validateRow', easyuiVar.editIndex)) {
        //自定义的赋值函数
        if (typeof (fieldSettingFun) == "function") fieldSettingFun(easyuiVar.editIndex, easyuiVar.dg);

        easyuiVar.dg.datagrid('endEdit', easyuiVar.editIndex);
        easyuiVar.editIndex = undefined;
        return true;
    } else {
        return false;
    }
}
function onClickCell(index, field) {
    easyuiVar.dg = $(this);
    if (easyuiVar.editIndex != index) {
        if (endEditing()) {
            easyuiVar.dg.datagrid('selectRow', index).datagrid('beginEdit', index);

            var ed = easyuiVar.dg.datagrid('getEditor', { index: index, field: field });
            if (ed) {
                ($(ed.target).data('textbox') ? $(ed.target).textbox('textbox') : $(ed.target)).focus();
                ($(ed.target).data('textbox') ? $(ed.target).textbox('textbox') : $(ed.target)).select();
            }
            easyuiVar.editIndex = index;
        } else {
            easyuiVar.dg.datagrid('selectRow', easyuiVar.editIndex);
        }
    }
}

