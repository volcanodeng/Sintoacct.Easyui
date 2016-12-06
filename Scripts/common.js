
function formSuccessHandle(data)
{
    if (data == null) return false;
    var data = JSON.parse(data);

    if (data.message != null) {
        $.messager.alert("保存", data.message, "warning");
        return false;
    }
    else {
        $.messager.show({ title: "保存", msg: "保存成功" });
        return true;
    }
}