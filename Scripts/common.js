
function formSuccessHandle(data)
{
    if (data == null) return;
    var data = JSON.parse(data);

    if (data.message != null) {
        $.messager.alert("保存", data.message, "warning");
        return;
    }
    else {
        $.messager.show({ title: "保存", msg: "保存成功" });
    }
}