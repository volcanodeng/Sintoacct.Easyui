using Orchard.UI.Resources;

namespace Sintoacct.Easyui
{
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();

            manifest.DefineScript("Easyui.min").SetUrl("jquery.easyui.min.js").SetDependencies("jQuery");
            manifest.DefineScript("Easyui.lang").SetUrl("easyui-lang-zh_CN.js").SetDependencies("Easyui.min");
            manifest.DefineScript("Easyui.extend").SetUrl("easyui.extend.js").SetDependencies("Easyui.lang");
            manifest.DefineScript("Easyui").SetUrl("common.js").SetDependencies("Easyui.extend");

            manifest.DefineStyle("site").SetUrl("site.css");
            manifest.DefineStyle("Easyui").SetUrl("easyui.css");
            manifest.DefineStyle("Easyui.icon").SetUrl("icon.css");
        }
    }
}
